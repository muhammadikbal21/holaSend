import React, { useEffect, useState } from 'react';
import { LoginBg } from '../../assets';
import { Button, Gap, Input, Link } from '../../components/atoms';
import {useHistory} from 'react-router-dom'
import Axios from 'axios';
import { render } from '@testing-library/react';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const onSubmit = () => {
        const isValid = validate();
        if (isValid) {
            const data = {
                username: username,
                password: password
            }
    
            Axios.post('http://localhost:8080/authenticate', data)
            .then(res => {
                console.log('success : ', res.data);
                const data = res.data.data
                localStorage.setItem('token', JSON.stringify(data.token))
                history.push('/')
            })
            .catch(err => {
                console.log('error : ', err);
            })
        }
    }

    const validate = () => {
        let usernameError = "";
        let passworError = "";

        if (!username) {
            usernameError = "Name cannot be blank!";
        }

        if (!password) {
            passworError = "Password cannot be blank!";
        }

        if (usernameError || passworError) {
            setUsernameError(usernameError);
            setPasswordError(passworError);
            return false;
        } 

        return true;
    }

    const handleUsernameChange = (e) => {
        const inputValue = e.target.value;
        const isEmpty = inputValue === "";
        setUsername(inputValue)
        setUsernameError(isEmpty)
    }

    const handlePasswordChange = (e) => {
        const inputValue = e.target.value;
        const isEmpty = inputValue === "";
        setPassword(inputValue)
        setPasswordError(isEmpty)
    }

    const history = useHistory();

    render(); {
        let usernameErrorText;
        if (usernameError) {
            usernameErrorText = (
                <div style={{fontSize: 12, color: "red"}}>Please input username</div>
            )
        }

        let passwordErrorText;
        if (passwordError) {
            passwordErrorText = (
                <div style={{fontSize: 12, color: "red"}}>Please input password</div>
            )
        }

        return (
            <div className="main-page">
                <div className="left">
                    <img src={LoginBg} className="left-bg" alt="ilustrator" />
                </div>
                <div className="right">
                    <p className="title">Login</p>
                    <Gap height={18} />
                    <Input label="Username" value={username} onChange={(e) => handleUsernameChange(e)} placeholder="Username" />
                    <Gap height={8} />
                    <div style={{fontSize: 12, color: "red"}}>{usernameError}</div>
                    {usernameErrorText}
                    <Gap height={18} />
                    <Input label="Password" value={password} onChange={(e) => handlePasswordChange(e)} placeholder="Password" type="password" />
                    <Gap height={8} />
                    <div style={{fontSize: 12, color: "red"}}>{passwordError}</div>
                    {passwordErrorText}
                    <Gap height={50} />
                    <Button title="Login" onClick={() => onSubmit()} />
                    <Gap height={100} />
                    <Link title="New to holaSend!? Create an account here!" onClick={() => history.push('/register')} />
                </div>
            </div>
        );
    }

}

export default Login;
