import React, { useState } from 'react';
import { LoginBg } from '../../assets';
import { Button, Gap, Input, Link } from '../../components/atoms';
import {useHistory} from 'react-router-dom'
import Axios from 'axios';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [validation, setValidation] = useState('');

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
                setValidation("Username or Password invalid!")
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

    const history = useHistory();

    return (
        <div className="main-page">
            <div className="left">
                <img src={LoginBg} className="left-bg" alt="ilustrator" />
            </div>
            <div className="right">
                <p className="title">Login</p>
                <Gap height={18} />
                <Input label="Username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
                <Gap height={8} />
                <div style={{fontSize: 12, color: "red"}}>{usernameError}</div>
                <Gap height={18} />
                <Input label="Password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" />
                <Gap height={8} />
                <div style={{fontSize: 12, color: "red"}}>{passwordError}</div>
                <Gap height={18} />
                <div style={{fontSize: 12, color: "red"}}>{validation}</div>
                <Gap height={50} />
                <Button title="Login" onClick={() => onSubmit()} />
                <Gap height={100} />
                <Link title="New to holaSend!? Create an account here!" onClick={() => history.push('/register')} />
            </div>
        </div>
    );
}

export default Login;
