
import '../styles/MainPage.css';
import { Canvas3DScene } from '../components/Canvas3DScene';
import { ChatContainerBox } from '../components/ChatContainerBox';
export const MainPage = () => {

    return (
        <>
        <Canvas3DScene></Canvas3DScene>
        <ol>
        <ChatContainerBox></ChatContainerBox>
        </ol>
        
        </>
    )
}