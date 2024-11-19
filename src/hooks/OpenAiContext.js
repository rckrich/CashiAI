

import React, { createContext, useState, useEffect } from "react";

const ElementContextOpenAi = createContext();

const ElementProviderOpenAi= ({ children }) => {
  const [messageList, setMessageList] = useState([]);
  const [ActiveThread, setActiveThread] = useState("");
  const open_ia_key = '';
    const assistant_id = "asst_zrSOh8NUnr9XkoSAcZOkFP8d";

useEffect(() => {
    if(ActiveThread === ""){
        handleNewThread();
    }
}, [ActiveThread])

const  handleNewThread = async () =>{
    fetch('https://api.openai.com/v1/threads', {
    method: 'POST',
    headers: {
        'Authorization': `Bearer ${open_ia_key}`,  
        'Content-Type': 'application/json',
        'OpenAI-Beta' : 'assistants=v2'    
    },
    body: JSON.stringify({

    })
    })
    .then(response => response.json())
        .then(data => {
            setActiveThread(data.id);
        return data.id;
        })
        .catch(error => console.error('Error:', error));
}



const handleMessageToThread = async(newMessage) => {
        fetch(`https://api.openai.com/v1/threads/${ActiveThread}/messages`, {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${open_ia_key}`,
              'Content-Type': 'application/json',
              'OpenAI-Beta' : 'assistants=v2',
            },
            body: JSON.stringify({
                "role": "user",
                "content": `${newMessage}`
            })
          })
        .then(response => response.json())
        .then(data => handleRun())
        .catch(error => console.error('Error:', error));

}

const handleRun =( ) => {
    fetch(`https://api.openai.com/v1/threads/${ActiveThread}/runs`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${open_ia_key}`,
          'Content-Type': 'application/json',
          'OpenAI-Beta' : 'assistants=v2',
        },
        body: JSON.stringify({
            "assistant_id" : `${assistant_id}`,
            "model" : "gpt-4o-mini",
        })
      })
      .then(response => response.json())
        .then(data => {
            checkRunStatus(data.id)
        })

        .catch(error => console.error('Error:', error));
}

const checkRunStatus = (runId) => {

    const interval = setInterval(() => {
        fetch(`https://api.openai.com/v1/threads/${ActiveThread}/runs/${runId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${open_ia_key}`,
                'Content-Type': 'application/json',
                'OpenAI-Beta': 'assistants=v2',
            }
        })
            .then(response => response.json())
            .then(data => {
                if(data.status === undefined) {
                    clearInterval(interval);
                }
                if (data.status === 'completed') {
                    fetchMessages();
                } else {
                }
            })
            .catch(error => {
                clearInterval(interval);
                console.error('Error:', error);
            });
    }, 3000);
}

const fetchMessages = () => {
    fetch(`https://api.openai.com/v1/threads/${ActiveThread}/messages?limit=100`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${open_ia_key}`,
            'Content-Type': 'application/json',
            'OpenAI-Beta': 'assistants=v2',
        }
    })
    .then(response => response.json())
        .then(data => {
            console.log(data);
            if(data.length !== 0){
                setMessageList(data.data.reverse());
                return data;
            }
        })
        .catch(error => console.error('Error fetching messages:', error));
}
const fetchFiles = async (filesId) => {
    try {
        const response = await fetch(`https://api.openai.com/v1/files/${filesId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${open_ia_key}`,
                'Content-Type': 'application/json',
            }
        });
        const data = await response.json();
        return data.filename;
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}
  return (
    <ElementContextOpenAi.Provider value={{ messageList, handleMessageToThread, fetchMessages, fetchFiles}}>
      {children}
    </ElementContextOpenAi.Provider>
  );
};

export { ElementContextOpenAi, ElementProviderOpenAi };


