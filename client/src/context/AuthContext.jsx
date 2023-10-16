import { createContext, useCallback, useEffect, useState } from "react";
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
    const [loginError, setLoginError] = useState(null);
    const [loginLoading, setLoginLoading] = useState(false);
    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: ''
    });

    // console.log('user', user)
    console.log(loginInfo);

    useEffect(() => {
        const user = localStorage.getItem('user');
        setUser(JSON.parse(user));
    }, [])

    const updateRegisterInfo = useCallback((info) => {
        setRegisterInfo(info);
    }, []);

    const updateLoginInfo = useCallback((info) => {
        setLoginInfo(info);
    }, []);

    const registerUser = useCallback(async(e) => {
        e.preventDefault();
        
        setRegisterLoading(true);
        setRegisterError(null);
        const res = await postRequest(`${baseURL}/users/register`, registerInfo);
        setRegisterLoading(false);

        if(res.error) {
            return setRegisterError(res);
        }
        localStorage.setItem('user', JSON.stringify(res));
        setUser(res);
    }, [registerInfo]);

    const loginUser = useCallback(async(e) => {
        e.preventDefault()
        setLoginError(null);
        setLoginLoading(true);
        const res = await postRequest(`${baseURL}/users/login`, loginInfo);
        setLoginLoading(false);
        if(res.error) {
            return setLoginError(res);
        }
        localStorage.setItem('user', JSON.stringify(res));
        setLoginInfo({
            email: '',
            password: ''
        })
        return setUser(res);
    }, [loginInfo]);

    const logoutUser = useCallback(() => {
        localStorage.removeItem('user');
        setUser(null);
    }, []);

    return <AuthContext.Provider value={{
        user, 
        registerInfo, 
        updateRegisterInfo, 
        registerUser, 
        registerError, 
        registerLoading,
        logoutUser,
        loginUser,
        loginError,
        loginInfo,
        updateLoginInfo,
        loginLoading
        }}>
        {children}
    </AuthContext.Provider>
}