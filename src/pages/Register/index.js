import React from 'react';
import { RegisterBg } from '../../assets';
import { Button, DropdownList, Gap, Input, Link } from '../../components/atoms';
// 
import './register.scss';
import {useHistory} from 'react-router-dom'


const Register = () => {
    const history = useHistory();
    return (
        <div className="main-page">
            <div className="left">
                <img src={RegisterBg} className="left-bg" alt="ilustrator" />
            </div>
            <div className="right">
                <p className="title">Register</p>
                <Gap height={18} />
                <Input label="First Name" placeholder="First Name" />
                <Gap height={18} />
                <Input label="Last Name" placeholder="Last Name" />
                <Gap height={18} />
                <Input label="Email" placeholder="Email" />
                <Gap height={18} />
                <Input label="Username" placeholder="Username" />
                <Gap height={18} />
                <Input label="Password" placeholder="Password" type="password" />
                <Gap height={40} />
                <DropdownList label="Identity Category" title="Select Identity" />
                <Gap height={40} />
                <Input label="Identification Number" placeholder="Identification Number" />
                <Gap height={18} />
                <Input label="Contact Number" placeholder="Contact Number" />
                <Gap height={18} />
                <Gap height={50} />
                <Button title="Register" onClick={() => history.push('/login')} />
                <Gap height={100} />
                <Link title="Back to Login" onClick={() => history.push('/login')} />
            </div>
        </div>
    );
}

export default Register;
