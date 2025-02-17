import { Float } from "@react-three/drei"
import { Text3D } from "@react-three/drei"

export default function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Float speed={1.4} rotationIntensity={1} floatIntensity={2}>
        <Text3D
          font="/fonts/Geist_Bold.json"
          size={0.5}
          height={0.2}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
          position={[-2, 0, 0]}
        >
          Bright Yanchirah
          <meshStandardMaterial
            color="#ffffff"
            emissive="#ffffff"
            emissiveIntensity={0.2}
            metalness={0.8}
            roughness={0.2}
          />
        </Text3D>
      </Float>
    </>
  )
}

