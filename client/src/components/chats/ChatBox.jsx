import { useContext, useState } from 'react';
import { Stack } from 'react-bootstrap';
import moment from 'moment';
import InputEmoji from 'react-input-emoji';

import { ChatContext } from '../../context/ChatContext'
import { AuthContext } from '../../context/AuthContext';
import { useFetchRecipient } from '../../hooks/useFetchRecipient';

export default function ChatBox() {
    const { user } = useContext(AuthContext);
    const { currentChat, isMessagesLoading, messages, sendTextMessage } = useContext(ChatContext);
    const { recipientUser } = useFetchRecipient(currentChat, user);
    const [textMessage, setTextMessage] = useState('');


    if(!recipientUser) return(
        <p style={{ alignItems:'center', width: '100%'}}>No conversation selected yet...</p>
    )
    if(isMessagesLoading) return(
        <p style={{ alignItems:'center', width: '100%'}}>Loading messages...</p>
    )

    return (
        <Stack gap={4} className='chat-box'>
            <div className="chat-header">
                <strong>{recipientUser.name}</strong>
            </div>
            <Stack gap={3} className='messages'>
                {messages && messages.map((message, index) => (
                    <Stack key={index} className={`
                        ${message?.senderId === user?._id 
                        ? 'message self align-self-end flex-grow-0'
                        : 'message align-self-start flex-grow-0'}`}>
                        <span>{message.text}</span>
                        <span className='message-footer'>{moment(message.createdAt).calendar()}</span>
                    </Stack>
                ))}
            </Stack>
            <Stack direction='horizontal' gap={3} className='chat-input flex-grow-0'> 
                <InputEmoji 
                    value={textMessage}
                    onChange={setTextMessage}
                    fontFamily='nunito'
                    borderColor='rgba(72,112,223, 0.2 )'
                    onEnter={() => sendTextMessage(textMessage, user, currentChat, setTextMessage)}
                />
                <button className='send-btn' onClick={() => sendTextMessage(textMessage, user, currentChat, setTextMessage)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send-fill" viewBox="0 0 16 16">
                    <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
                </svg>
                </button>
            </Stack>
        </Stack>
    )
}
