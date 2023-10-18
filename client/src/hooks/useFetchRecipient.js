import { useEffect, useState } from "react";

import { baseURL, getRequest } from "../utils/services";

export const useFetchRecipient = (chat, user) => {
    const [error, setError] = useState(null);
    const [recipientUser, setRecipientUser] = useState(null);

    const recipientId = chat?.members?.find((id) => id !== user?._id);

    useEffect(() => {
        const getUser = async() => {
            if(!recipientId) return null;

            const response = await getRequest(`${baseURL}/users/find/${recipientId}`);

            if(response.error) {
                return setError(error);
            }

            setRecipientUser(response);
        }

        getUser();
    }, [recipientId]);

    return { recipientUser }
};