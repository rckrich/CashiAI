
import '../styles/ChatStyle.css';
import { ChatInput } from './ChatInput';
import { ChatMessageList } from './ChatMessageList';
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
} from "@chatscope/chat-ui-kit-react";
export const ChatContainerBox = () => {

    return (
        <div className='ChatContainer'>
            <div style={{ height: "100vh", width: "100%" }}>

            <MainContainer className="overrideStyle" >
            <ChatContainer className="overrideStyle">


            <MessageList className="overrideStyleMessageList">
                    <Message
                    model={{
                        message: "Hello my friend",
                        sentTime: "just now",
                        sender: "Joe",
                    }}
                    />
                    <Message
                    model={{
                        message: "Hello my friend",
                        sentTime: "just now",
                        sender: "Joe",
                    }}
                    />
                    <Message
                    model={{
                        message: "Hello my friend",
                        sentTime: "just now",
                        sender: "Joe",
                    }}
                    />
                    <Message
                    model={{
                        message: "Hello my friend",
                        sentTime: "just now",
                        sender: "Joe",
                    }}
                    />
                    <Message
                    model={{
                        message: "Hello my friend",
                        sentTime: "just now",
                        sender: "Joe",
                    }}
                    />

<Message
                    model={{
                        message: "Hello my friend",
                        sentTime: "just now",
                        sender: "Joe",
                    }}
                    />
                    <Message
                    model={{
                        message: "Hello my friend",
                        sentTime: "just now",
                        sender: "Joe",
                    }}
                    />

                    <Message
                    model={{
                        message: "bla bla",
                        sentTime: "just now",
                        sender: "pepe",
                        direction: "incoming",
                    }}
                    />  
                </MessageList>

                <MessageInput placeholder="Type message here" />
                </ChatContainer>
            </MainContainer>
            </div>
        </div>
    )
}