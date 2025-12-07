import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Sky, Sphere, MeshDistortMaterial, Float } from '@react-three/drei';

const NightObject = () => {
  const meshRef = useRef();
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const scrollY = window.scrollY;
    // Rotate 
    meshRef.current.rotation.y = t * 0.05 + (scrollY * 0.001); 
    meshRef.current.rotation.x = (scrollY * 0.0005);
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
};

const DayObject = () => {
    const meshRef = useRef();
    
    useFrame((state) => {
      const t = state.clock.getElapsedTime();
      meshRef.current.rotation.x = t * 0.2;
      meshRef.current.rotation.y = t * 0.3;
    });
  
    return (
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <Sphere ref={meshRef} args={[1, 64, 64]} scale={2.2}>
            <MeshDistortMaterial 
                color="#38bdf8" 
                attach="material" 
                distort={0.6} 
                speed={2} 
                roughness={0.2}
                metalness={0.1}
            />
        </Sphere>
      </Float>
    );
  };

const CyberScene = ({ theme }) => {
  const isDark = theme === 'dark';

  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0,
      pointerEvents: 'none',
      background: isDark ? '#030712' : '#f0f9ff' 
    }}>
      <Canvas camera={{ position: [0, 0, 7] }}>
        <color attach="background" args={[isDark ? '#030712' : '#f0f9ff']} />
        
        <ambientLight intensity={isDark ? 0.5 : 1} />
        <pointLight position={[10, 10, 10]} intensity={1} color={isDark ? "#8b5cf6" : "#ffffff"} />
        <pointLight position={[-10, -10, -10]} intensity={1} color={isDark ? "#06b6d4" : "#38bdf8"} />

        {isDark ? (
           <>
             <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
             <NightObject />
           </>
        ) : (
           <>
             <Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25} />
             <DayObject />
           </>
        )}
      </Canvas>
    </div>
  );
};

export default CyberScene;
