import React, { useEffect, useState } from 'react';
import { RegisterBg } from '../../assets';
import { Button, DropdownList, Gap, Input, Link } from '../../components/atoms';
import './register.scss';
import {useHistory} from 'react-router-dom'
import swal from 'sweetalert';
import { registerAction } from '../../configs/actions/register/registerAction'
import { connect } from 'react-redux';

const Register = (props) => {

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [identityCategory, setIdentityCategory] = useState('')
    const [identificationNumber, setIdentificationNumber] = useState('')
    const [contactNumber, setContactNumber] = useState('')

    const [firstnameError, setFirstnameError] = useState('')
    const [lastnameError, setLastnameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [usernameError, setUsernameError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [identityCategoryError, setIdentityCategoryError] = useState('')
    const [identificationNumberError, setIdentificationNumberError] = useState('')
    const [contactNumberError, setContactNumberError] = useState('')
    
    const history = useHistory();

    const handleDropdown = (identityCategory) => {
        setIdentityCategory(identityCategory)
    }

    useEffect(() => {
        // jika register sukses
        if (props.data) {
            swal("Registration Success!", "", "success");
            history.push('/login')
        }
        
        // jika register error
        if (props.error) {
            // swal("Registration Error!", "", "error");
        }
    }, [props.data, props.error])

    // clear error message
    useEffect(() => {
        setFirstnameError("")
        setLastnameError("")
        setEmailError("")
        setUsernameError("")
        setPasswordError("")
        setIdentityCategoryError("")
        setIdentificationNumberError("")
        setContactNumberError("")
    }, [
        firstname,
        lastname,
        email,
        username,
        password,
        identityCategory,
        identificationNumber,
        contactNumber
    ])

    const onSubmit = () => {
        const isValid = validate();
        if (isValid) {
            const data = {
                user: {
                    username: username,
                    email: email,
                    password: password
                },
                userDetails: {
                    identityCategory: identityCategory,
                    identificationNumber: identificationNumber,
                    firstName: firstname,
                    lastName: lastname,
                    contactNumber: contactNumber
                }
            }
    
            // const config = {
            //     headers: {
            //         'Access-Control-Allow-Origin' : '*',
            //         'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            //         'Access-Control-Allow-Headers' : 'Content-Type, Authorization'
            //     }
            // }
            
            props.dispatchRegisterAction(data)

            // Axios.post('/user/register', data, config)
            // .then(res => {
            //     console.log('success : ', res.data);
            //     swal("Registration Success!", "", "success");
            //     history.push('/login')
            // })
            // .catch(err => {
            //     console.log('error : ', err);
            // })
            // console.log("isian data: ", data);
        }
    }

    const validate = () => {
        let firstnameError = '';
        let lastnameError = "";
        let emailError = "";
        let usernameError = "";
        let passwordError = "";
        let identityCategoryError = "";
        let identificationNumberError = "";
        let contactNumberError = "";

        if (!firstname) {
            firstnameError = "Firstname must not blank!"
        }
        
        if (!lastname) {
            lastnameError = "Lastname must not blank!"
        }

        if (!email.includes("@")) {
            emailError = "Invalid Email!"
        }

        if (username.length < 6) {
            usernameError = "Username must be more than 6 characters!";
        }
        
        if (password.length < 8) {
            passwordError = "Password must be more than 8 characters! (include capital letters and numbers)";
        }

        if (!identityCategory) {
            identityCategoryError = "Identity Category must not blank!"
        }
        
        if (!identificationNumber) {
            identificationNumberError = "Identification Number must not blank!"
        }

        if (!contactNumber) {
            contactNumberError = "Contact Number must not blank!"
        }

        if (
            firstnameError ||
            lastnameError ||
            emailError || 
            usernameError || 
            passwordError ||
            identityCategoryError ||
            identificationNumberError ||
            contactNumberError
            ) {
            setFirstnameError(firstnameError);
            setLastnameError(lastnameError);
            setEmailError(emailError);
            setUsernameError(usernameError);
            setPasswordError(passwordError);
            setIdentityCategoryError(identityCategoryError);
            setIdentificationNumberError(identificationNumberError);
            setContactNumberError(contactNumberError);
            swal("Registration Error!", "", "error");
            return false;
        } 

        return true;
    }


    return (
        <div className="main-page">
            <div className="left">
                <img src={RegisterBg} className="left-bg" alt="ilustrator" />
            </div>
            <div className="right">
                <p className="title">Register</p>
                <Gap height={10} />
                <Input label="First Name" value={firstname} onChange={(e) => setFirstname(e.target.value)} placeholder="First Name" />
                <Gap height={10} />
                <div style={{fontSize: 12, color: "red"}}>{firstnameError}</div>
                <Input label="Last Name" value={lastname} onChange={(e) => setLastname(e.target.value)} placeholder="Last Name" />
                <Gap height={10} />
                <div style={{fontSize: 12, color: "red"}}>{lastnameError}</div>
                <Input label="Email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <Gap height={10} />
                <div style={{fontSize: 12, color: "red"}}>{emailError}</div>
                <Gap height={10} />
                <Input label="Username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
                <Gap height={10} />
                <div style={{fontSize: 12, color: "red"}}>{usernameError}</div>
                <Gap height={10} />
                <Input label="Password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" />
                <Gap height={10} />
                <div style={{fontSize: 12, color: "red"}}>{passwordError}</div>
                <Gap height={10} />
                <DropdownList
                    label="Identity Category"
                    data={[
                        {value: 1, label: "KTP"},
                        {value: 2, label: "SIM"},
                        {value: 3, label: "PASSPORT"}
                    ]}
                    value={identityCategory}
                    placeholder="Select Identity"
                    handleDropdown={handleDropdown}
                />
                <Gap height={10} />
                <div style={{fontSize: 12, color: "red"}}>{identityCategoryError}</div>
                <Input label="Identification Number" value={identificationNumber} onChange={(e) => setIdentificationNumber(e.target.value)} placeholder="Identification Number" />
                <Gap height={10} />
                <div style={{fontSize: 12, color: "red"}}>{identificationNumberError}</div>
                <Input label="Contact Number" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} placeholder="Contact Number" />
                <Gap height={10} />
                <div style={{fontSize: 12, color: "red"}}>{contactNumberError}</div>
                <Button title="Register" onClick={() => onSubmit()} />
                <Gap height={100} />
                <Link title="Back to Login" onClick={() => history.push('/login')} />
            </div>
        </div>
    );
}

// reducer
const mapStateToProps = (state) => {
    return {
        data: state.registerReducer.data,
        isLoading: state.registerReducer.isLoading,
        error: state.registerReducer.error
    }
}

// action
const mapDispatchToProps = {
    dispatchRegisterAction : registerAction
}

export default connect(mapStateToProps, mapDispatchToProps) (Register);
