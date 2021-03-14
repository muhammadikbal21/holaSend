import React, { useEffect, useState } from 'react';
import { LoginBg } from '../../assets';
import { Button, Gap, Input, Link } from '../../components/atoms';
import {useHistory} from 'react-router-dom'
import Axios from 'axios';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')

    const onSubmit = () => {
        const data = {
            username: username,
            password: password
        }

        Axios.post('http://localhost:8080/authenticate', data)
        .then(res => {
            console.log('success : ', res.data);
            const data = res.data.data
            localStorage.setItem('token', JSON.stringify(data.token))
        })
        .catch(err => {
            console.log('error : ', err);
        })
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
                <Gap height={18} />
                <Input label="Password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" />
                <Gap height={50} />
                <Button title="Login" onClick={() => onSubmit()} />
                {/* onClick={() => history.push('/')} */}
                <Gap height={100} />
                <Link title="New to holaSend!? Create an Account" onClick={() => history.push('/register')} />
            </div>
        </div>
    );
}

export default Login;
