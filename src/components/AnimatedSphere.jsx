import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const AnimatedSphere = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} intensity={1} />
      <OrbitControls enableZoom={false} />
      <Sphere args={[1, 64, 64]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#00bcd4"
          attach="material"
          distort={0.5}
          speed={2}
        />
      </Sphere>
    </Canvas>
  );
};

export default AnimatedSphere;

