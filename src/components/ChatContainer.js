
import '../styles/ChatStyle.css';
import { ChatInput } from './ChatInput';
import { ChatMessageList } from './ChatMessageList';
export const ChatContainer = () => {

    return (
        <div className='Container'>
            <div className='ChatContainer'>
            <ChatMessageList></ChatMessageList>
            <ChatInput></ChatInput>
            </div>
        </div>
    )
}