import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Sphere, MeshDistortMaterial, ScrollControls, useScroll } from '@react-three/drei';

const Planet = () => {
  const meshRef = useRef();
  const scroll = useScroll();
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    // Base rotation
    meshRef.current.rotation.y = t * 0.05;
    
    // Scroll interaction
    // scroll.offset is 0 to 1
    const offset = scroll.offset; 
    meshRef.current.rotation.x = offset * Math.PI; // Rotate on X based on scroll
    meshRef.current.rotation.z = offset * Math.PI * 0.5;
  });

  return (
    <mesh ref={meshRef} scale={2.5}>
      <sphereGeometry args={[1, 64, 64]} />
      {/* Holographic Wireframe aesthetic */}
      <meshStandardMaterial
        color="#06b6d4"
        wireframe
        emissive="#06b6d4"
        emissiveIntensity={0.5}
        transparent
        opacity={0.3}
      />
    </mesh>
  );
};

const CyberScene = () => {
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0,
      pointerEvents: 'none',
      background: 'black' // Fallback
    }}>
      <Canvas camera={{ position: [0, 0, 7] }}>
        <color attach="background" args={['#030712']} />
        
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#8b5cf6" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#06b6d4" />

        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        {/* ScrollControls must wrap the scrollable content or be used to drive generic values.
            However, ScrollControls usually create a DOM scroll overlay which we DON'T want here 
            because we are using standard HTML scrolling. 
            Standard HTML scroll driving R3F is tricky without useScroll from drei inside ScrollControls 
            OVERLAYING the content. 
            
            ALTERNATE APPROACH: Just pass window.scrollY to the component logic or simpler:
            We will skip ScrollControls wrapper which hijacks scroll, and just use a customized hook or direct prop 
            if we want true sync.
            
            BUT simplest way for "React Three Fiber" scroll integration without hijacking native scroll 
            is often just listening to window scroll in a component or using a library like Lenis + R3F.
            
            FOR THIS IMPLEMENTATION: I will simply use a custom hook inside Planet to read window.scrollY for simplicity 
            and robustness without altering the page scroll behavior aggressively.
        */}
        <ScrollAwarePlanet />
      </Canvas>
    </div>
  );
};

const ScrollAwarePlanet = () => {
   const meshRef = useRef();

   useFrame((state) => {
     const t = state.clock.getElapsedTime();
     const scrollY = window.scrollY; // Crude but effective for background
     const scrollProgress = scrollY / (document.body.scrollHeight - window.innerHeight || 1);
     
     meshRef.current.rotation.y = t * 0.05 + (scrollProgress * 5); // Speed up rotation with scroll
     meshRef.current.rotation.x = scrollProgress * 2;
   });

   return (
    <mesh ref={meshRef} scale={2.5}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial
        color="#06b6d4"
        wireframe
        emissive="#06b6d4"
        emissiveIntensity={0.5}
        transparent
        opacity={0.3}
      />
    </mesh>
   );
}

export default CyberScene;
