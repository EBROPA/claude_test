'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Environment } from '@react-three/drei'
import * as THREE from 'three'

function AnimatedShape({
  geometry,
  position,
  color,
  scale = 1,
  rotationSpeed = 0.5
}: {
  geometry: 'box' | 'octahedron' | 'dodecahedron' | 'cone' | 'torus'
  position: [number, number, number]
  color: string
  scale?: number
  rotationSpeed?: number
}) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * rotationSpeed
      meshRef.current.rotation.y = state.clock.elapsedTime * rotationSpeed * 0.7
    }
  })

  const GeometryComponent = () => {
    switch (geometry) {
      case 'box':
        return <boxGeometry args={[1, 1, 1]} />
      case 'octahedron':
        return <octahedronGeometry args={[1]} />
      case 'dodecahedron':
        return <dodecahedronGeometry args={[1]} />
      case 'cone':
        return <coneGeometry args={[1, 2, 32]} />
      case 'torus':
        return <torusGeometry args={[1, 0.4, 16, 32]} />
      default:
        return <sphereGeometry args={[1, 32, 32]} />
    }
  }

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <GeometryComponent />
        <MeshDistortMaterial
          color={color}
          envMapIntensity={1}
          clearcoat={1}
          clearcoatRoughness={0}
          metalness={0.8}
          roughness={0.2}
          distort={0.2}
          speed={2}
        />
      </mesh>
    </Float>
  )
}

export function FloatingShapes() {
  return (
    <div className="absolute inset-0 z-0 opacity-60">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#a855f7" />

        <AnimatedShape geometry="octahedron" position={[-4, 2, -2]} color="#6366f1" scale={0.8} />
        <AnimatedShape geometry="dodecahedron" position={[4, -2, -3]} color="#a855f7" scale={0.6} />
        <AnimatedShape geometry="torus" position={[3, 3, -4]} color="#06b6d4" scale={0.5} />
        <AnimatedShape geometry="box" position={[-3, -3, -2]} color="#f59e0b" scale={0.7} rotationSpeed={0.3} />

        <Environment preset="city" />
      </Canvas>
    </div>
  )
}
