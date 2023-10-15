import { createContext, useCallback, useState } from "react";
import { baseURL, postRequest } from "../utils/services";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [registerError, setRegisterError] = useState(null);
    const [registerLoading, setRegisterLoading] = useState(false);
    const [registerInfo, setRegisterInfo] = useState({
        name: '',
        email: '',
        password: ''
    });

    const updateRegisterInfo = useCallback((info) => {
        setRegisterInfo(info);
    }, []);

    const registerUser = useCallback(async(e) => {
        e.preventDefault();
        
        setRegisterLoading(true);
        setRegisterError(null);
        console.log(registerInfo)
        const res = await postRequest(`${baseURL}/users/register`, registerInfo);
        setRegisterLoading(false);

        if(res.error) {
            return setRegisterError(res);
        }
        localStorage.setItem('user', JSON.stringify(res));
        setUser(res);
    }, [registerInfo]);

    return <AuthContext.Provider value={{user, registerInfo, updateRegisterInfo, registerUser, registerError, registerLoading}}>
        {children}
    </AuthContext.Provider>
}