import React, { useEffect, useState } from 'react';
import { LoginBg } from '../../assets';
import { Button, Gap, Input, Link, Loading } from '../../components/atoms';
import { useHistory } from 'react-router-dom'
import swal from 'sweetalert';
import { loginAction } from '../../configs/actions/login/loginAction'
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';
import './login.scss'

const Login = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const [validation, setValidation] = useState('');

    const history = useHistory();

    useEffect(() => {
        // jika login sukses
        if (props.data) {
            localStorage.setItem('token', props.data.token)
            localStorage.setItem('role', props.data.role)
            swal({
                title: "Login Success!",
                icon: "success",
                button: "OK",
            }).then(() => {
                return (
                    window.location.href = "/dashboard"
                )
            });
        }

        // jika login error
        if (props.error) {
            setValidation("Username or Password invalid!")
            swal("Login Error!", "Username or Password invalid!", "error");
        }

    }, [props.data, props.error])

    // clear error message
    useEffect(() => {
        setValidation("")
        setUsernameError("")
        setPasswordError("")
    }, [username, password])

    const onSubmit = (e) => {
        e.preventDefault()
        const isValid = validate();
        if (isValid) {
            const data = {
                username: username,
                password: password
            }
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
            swal("Login Error!", "", "error");
            return false;
        }

        return true;
    }

    return (
        <div className="main-page-login">
                <div className="left-login">
                    <img src={LoginBg} className="left-bg-login" alt="ilustrator" />
                </div>
                <div className="right-login">
                    <Container
                        className="container"
                        error={props.error}
                        loading={props.loading}
                        style={{ marginTop: "50px" }}
                    >
                        <p className="title-login">Login</p>
                        <form metthod="POST" onSubmit={onSubmit}>
                            <Gap height={18} />
                            <Input label="Username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
                            <Gap height={8} />
                            <div style={{ fontSize: 12, color: "red" }}>{usernameError}</div>
                            <Gap height={18} />
                            <Input label="Password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" />
                            <Gap height={8} />
                            <div style={{ fontSize: 12, color: "red" }}>{passwordError}</div>
                            <Gap height={18} />
                            <div style={{ fontSize: 12, color: "red" }}>{validation}</div>
                            <Gap height={50} />
                            <Button title="Login" onClick={onSubmit} />
                        </form>
                        <Gap height={100} />
                        <Link title="New to holaSend!? Create an account here!" onClick={() => history.push('/register')} />
                        {props.isLoading ? <Loading /> : null}
                    </Container>
                </div>
        </div>
    );
}

// reducer
const mapStateToProps = (state) => {
    return {
        data: state.loginReducer.data,
        isLoading: state.loginReducer.isLoading,
        error: state.loginReducer.error
    }
}

// action
const mapDispatchToProps = {
    dispatchLoginAction: loginAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
