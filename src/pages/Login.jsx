import React from 'react';
import MyInput from '../components/UI/input/MyInput';
import MyButton from '../components/UI/button/MyButton';
import { useContext } from 'react'
import { AuthContext } from '../context/index';

const Login = () => {
    const {setIsAuth} = useContext(AuthContext)
    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true');
    }
    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder="Your login"/>
                <MyInput type="password" placeholder="Your password"/>
                <MyButton>Enter</MyButton>
            </form>
        </div>
    );
};

export default Login;