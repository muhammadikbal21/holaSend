import React, { useEffect, useState } from 'react';
import { LoginBg } from '../../assets';
import { Button, Gap, Input, Link } from '../../components/atoms';
import {useHistory} from 'react-router-dom'
import swal from 'sweetalert';
import { loginAction } from '../../configs/actions/login/loginAction'
import { connect } from 'react-redux';

const Login = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [validation, setValidation] = useState('');
    
    const history = useHistory();

    useEffect(() => {
        console.log("USEEFFECT");
        
        // jika login sukses
        if(props.data) {
            localStorage.setItem('token', props.data.token)
            swal("Login Success!", "", "success");
            history.push('/')
        }
        
        // jika login error
        if (props.error) {
            setValidation("Username or Password invalid!")
        }
        
    }, [props.data, props.error])

    // clear error message
    useEffect(() => {
        setValidation("")
        setUsernameError("")
        setPasswordError("")
    }, [username, password])

    const onSubmit = () => {
        const isValid = validate();
        if (isValid) {
            const data = {
                username: username,
                password: password
            }
            console.log(data)

            // call axios dengan memanggil action/dispatch nya
            props.dispatchLoginAction(data)
    
        }
    }

    const validate = () => {
        let usernameError = "";
        let passwordError = "";

        if (!username) {
            usernameError = "Name cannot be blank!";
        }
        
        if (!password) {
            passwordError = "Password cannot be blank!";
        }

        if (usernameError || passwordError) {
            setUsernameError(usernameError);
            setPasswordError(passwordError);
            return false;
        } 

        return true;
    }

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

const mapStateToProps = (state) => {
    return {
        data: state.loginReducer.data,
        isLoading: state.loginReducer.isLoading,
        error: state.loginReducer.error
    }
}

const mapDispatchToProps = {
    dispatchLoginAction : loginAction
}

export default connect(mapStateToProps, mapDispatchToProps) (Login);
