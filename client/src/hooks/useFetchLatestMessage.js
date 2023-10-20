import { useContext, useEffect, useState } from "react"
import { ChatContext } from "../context/ChatContext"
import { baseURL, getRequest } from "../utils/services";

export const useFetchLatestMessage = (chat) => {
    const { newMessage, notifications } = useContext(ChatContext);
    const [latestMessage, setLatestMessage] = useState(null);

    useEffect(() => {
        const getMessage = async() => {
            const response = await getRequest(`${baseURL}/messages/${chat?._id}`);
    
            if(response.error) {
                return console.log('Error getting messages...', response.error);
            }
    
            const latestMessage = response[response?.length - 1];
    
            setLatestMessage(latestMessage);
        }
        getMessage();
    }, [newMessage, notifications]);

    return { latestMessage }
}

