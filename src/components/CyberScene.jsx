import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Sphere, MeshDistortMaterial } from '@react-three/drei';

const Planet = () => {
  const meshRef = useRef();
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.y = t * 0.1;
    meshRef.current.rotation.z = t * 0.05;
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
        
        <Planet />
      </Canvas>
    </div>
  );
};

export default CyberScene;
