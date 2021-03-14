import React, { useState } from 'react';
import { RegisterBg } from '../../assets';
import { Button, DropdownList, Gap, Input, Link } from '../../components/atoms';
import './register.scss';
import {useHistory} from 'react-router-dom'


const Register = () => {

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [identityCategory, setIdentityCategory] = useState('')
    const [identificationNumber, setIdentificationNumber] = useState('')
    const [contactNumber, setContactNumber] = useState('')

    const handleDropdown = (identityCategory) => {
        setIdentityCategory(identityCategory)
    }

    const onSubmit = () => {
        // history.push('/login')
        const data = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            username: username,
            password: password,
            identityCategory: identityCategory,
            identificationNumber: identificationNumber,
            contactNumber: contactNumber
        }

        console.log(data);
    }

    const history = useHistory();

    return (
        <div className="main-page">
            <div className="left">
                <img src={RegisterBg} className="left-bg" alt="ilustrator" />
            </div>
            <div className="right">
                <p className="title">Register</p>
                <Gap height={18} />
                <Input label="First Name" value={firstname} onChange={(e) => setFirstname(e.target.value)} placeholder="First Name" />
                <Gap height={18} />
                <Input label="Last Name" value={lastname} onChange={(e) => setLastname(e.target.value)} placeholder="Last Name" />
                <Gap height={18} />
                <Input label="Email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <Gap height={18} />
                <Input label="Username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
                <Gap height={18} />
                <Input label="Password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" />
                <Gap height={18} />
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
                <Gap height={18} />
                <Input label="Identification Number" value={identificationNumber} onChange={(e) => setIdentificationNumber(e.target.value)} placeholder="Identification Number" />
                <Gap height={18} />
                <Input label="Contact Number" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} placeholder="Contact Number" />
                <Gap height={50} />
                <Button title="Register" onClick={() => onSubmit()} />
                <Gap height={100} />
                <Link title="Back to Login" onClick={() => history.push('/login')} />
            </div>
        </div>
    );
}

export default Register;
