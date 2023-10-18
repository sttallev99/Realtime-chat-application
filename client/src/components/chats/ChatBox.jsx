import { useContext } from 'react';
import { Stack } from 'react-bootstrap';
import moment from 'moment';

import { ChatContext } from '../../context/ChatContext'
import { AuthContext } from '../../context/AuthContext';
import { useFetchRecipient } from '../../hooks/useFetchRecipient';

export default function ChatBox() {
    const { user } = useContext(AuthContext);
    const { currentChat, isMessagesLoading, messages } = useContext(ChatContext);
    const { recipientUser } = useFetchRecipient(currentChat, user);

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
        </Stack>
    )
}
