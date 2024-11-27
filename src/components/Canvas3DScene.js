import { Canvas } from '@react-three/fiber'
import { Avatar  } from './Avatar'

//const model = useGLTF.preload("");

export const Canvas3DScene = () => {

    return (
        <>
            <Canvas camera={{position: [0, 0, 5]}} style={{position: "absolute"}} >
            <directionalLight color="#84cab8" position={[5, 0, 2]} />
            <directionalLight color="#582899" position={[-5, 0, 2]} />
            <ambientLight></ambientLight>
            <Avatar position={[0, -2.5, 2.5]} scale={2} />
            </Canvas>
        </>
    )
}

