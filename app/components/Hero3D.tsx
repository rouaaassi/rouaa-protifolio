"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Float, Text, Environment } from "@react-three/drei"
import { Suspense } from "react"

function PhotoFrame({
  position,
  rotation,
  imageUrl,
  scale = 1,
}: {
  position: [number, number, number]
  rotation: [number, number, number]
  imageUrl: string
  scale?: number
}) {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group position={position} rotation={rotation} scale={scale}>
        {/* Frame */}
        <mesh>
          <boxGeometry args={[2.2, 2.8, 0.1]} />
          <meshStandardMaterial color="#000000" />
        </mesh>

        {/* Photo */}
        <mesh position={[0, 0, 0.06]}>
          <planeGeometry args={[2, 2.6]} />
          <meshStandardMaterial color="#4b5563" />
        </mesh>

        {/* Glass effect */}
        <mesh position={[0, 0, 0.07]}>
          <planeGeometry args={[2, 2.6]} />
          <meshStandardMaterial color="#ffffff" transparent opacity={0.1} roughness={0} metalness={0.1} />
        </mesh>
      </group>
    </Float>
  )
}

function ProfilePhoto({
  position,
  rotation,
  scale = 1,
}: {
  position: [number, number, number]
  rotation: [number, number, number]
  scale?: number
}) {
  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.4}>
      <group position={position} rotation={rotation} scale={scale}>
        {/* Main photo frame - circular */}
        <mesh>
          <cylinderGeometry args={[1.5, 1.5, 0.2, 32]} />
          <meshStandardMaterial color="#1f2937" metalness={0.3} roughness={0.4} />
        </mesh>

        {/* Profile photo background */}
        <mesh position={[0, 0, 0.11]} rotation={[Math.PI / 2, 0, 0]}>
          <circleGeometry args={[1.3, 32]} />
          <meshStandardMaterial color="#6b7280" />
        </mesh>

        {/* Profile photo placeholder */}
        <mesh position={[0, 0, 0.12]} rotation={[Math.PI / 2, 0, 0]}>
          <circleGeometry args={[1.2, 32]} />
          <meshStandardMaterial color="#9ca3af" />
        </mesh>

        {/* Glowing ring effect */}
        <mesh position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[1.3, 1.5, 32]} />
          <meshStandardMaterial color="#a855f7" emissive="#a855f7" emissiveIntensity={0.5} transparent opacity={0.8} />
        </mesh>

        {/* Glass overlay */}
        <mesh position={[0, 0, 0.14]} rotation={[Math.PI / 2, 0, 0]}>
          <circleGeometry args={[1.2, 32]} />
          <meshStandardMaterial color="#ffffff" transparent opacity={0.2} roughness={0} metalness={0.1} />
        </mesh>
      </group>
    </Float>
  )
}

function Scene() {
  return (
    <>
      <Environment preset="studio" />
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1.2} />
      <pointLight position={[-10, -10, -10]} intensity={0.8} />
      <pointLight position={[0, 0, 5]} intensity={0.5} />

      {/* 3D Profile Photo - centered and prominent */}
      <ProfilePhoto position={[0, 1, 3]} rotation={[0, 0, 0]} scale={1.5} />

      {/* Floating photo frames */}
      <PhotoFrame
        position={[-4, 1, 0]}
        rotation={[0, 0.3, 0]}
        imageUrl="/placeholder.svg?height=400&width=300"
        scale={0.8}
      />
      <PhotoFrame
        position={[4, -0.5, -1]}
        rotation={[0, -0.4, 0]}
        imageUrl="/placeholder.svg?height=400&width=300"
        scale={0.9}
      />
      <PhotoFrame
        position={[0, 3, -2]}
        rotation={[0, 0, 0.1]}
        imageUrl="/placeholder.svg?height=400&width=300"
        scale={0.7}
      />
      <PhotoFrame
        position={[-2, -2, 1]}
        rotation={[0, 0.2, -0.1]}
        imageUrl="/placeholder.svg?height=400&width=300"
        scale={0.6}
      />
      <PhotoFrame
        position={[3, 2, 1]}
        rotation={[0, -0.3, 0.05]}
        imageUrl="/placeholder.svg?height=400&width=300"
        scale={0.75}
      />

      {/* Floating text */}
      <Float speed={1} rotationIntensity={0.2} floatIntensity={0.3}>
        <Text
          position={[0, -2, 2]}
          fontSize={0.5}
          color="#ec4899"
          anchorX="center"
          anchorY="middle"
          font="/fonts/Inter_Bold.json"
        >
          Creative Developer
        </Text>
      </Float>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2.5}
        autoRotate
        autoRotateSpeed={0.3}
      />
    </>
  )
}

export default function Hero3D() {
  return (
    <div className="w-full h-screen">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  )
}
