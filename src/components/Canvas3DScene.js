import { Canvas } from '@react-three/fiber';
import { Camera } from 'three';

export const Canvas3DScene = () => {

    return (
        <>
            <Canvas camera={{position: [5, 5, 5]}} style={{position: "absolute"}} >
            <directionalLight color="white" position={[0, 0, 2]} />
            <ambientLight></ambientLight>
                <mesh position={[0, 0, 0]} >
                    <boxGeometry args={[2, 2, 2]} />
                    <meshStandardMaterial color="red" />
                </mesh>
            </Canvas>
        </>
    )
}