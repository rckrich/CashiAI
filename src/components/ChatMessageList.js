import {
    MessageList,
    Message,
  } from "@chatscope/chat-ui-kit-react";

export const ChatMessageList = () => {

    return (

        <ol>
            <MessageList>
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
        </ol>

    )
}