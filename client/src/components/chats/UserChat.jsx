import React, { useContext } from 'react'
import { Stack } from 'react-bootstrap';

import { useFetchRecipient } from '../../hooks/useFetchRecipient';
import avatar from '../../assets/avatar.svg'
import { ChatContext } from '../../context/ChatContext';

export default function UserChat({chat, user}) {
    const {recipientUser} = useFetchRecipient(chat, user);
    const { onlineUsers } = useContext(ChatContext);

    const isOnline = onlineUsers?.some((user) => user?.userId === recipientUser?._id);

  return (
    <Stack direction='horizontal' gap={3} className='user-card align-items-center p-2 justify-content-between' role='button'>
        <div className="d-flex">
            <div className="me-2">
                <img src={avatar} height='35px' />
            </div>
            <div className="text-content">
                <div className="name">{recipientUser?.name}</div>
                <div className="text">Text Message</div>
            </div>
        </div>
        <div className="d-flex flex-column align-items-end">
            <div className="date">12/12/2023</div>
            <div className="this-user-notifications">2</div>
            <span className={isOnline ? 'user-online' : ''}></span>
        </div>
    </Stack>
  )
}
