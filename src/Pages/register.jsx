import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./style.css";
import { useNavigate } from 'react-router-dom';     //import usNavigate

const Register = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();     //set useNaviagtion in navigate const variable

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            name,
            phone,
            email
        }
        console.log(userData)
        if(userData.name == "" || userData.phone == "" || userData.email == "") // to check data vlaidations
            alert("All feilds are Required...")
        else
            navigate('/login')      // to navigate another component
    }
    return (
      <div className='main-sct'>
        <div className='main-ctr'>
        <h1 className='heading'>Register Form</h1>
        <form>
            <input
                type='text'
                placeholder = "Enter Your Name Here...."
                value={name}
                onChange={(e) => setName(e.target.value)}
            /><br />
            <input
                type='number'
                placeholder = "Enter Your Phone Here...."
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            /><br />
            <input
                type='email'
                placeholder = "Enter Your EMail Here...."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            /><br />
            <button onClick={handleSubmit}>Register</button>
        </form>
        <Link to="/login">Click here to Login</Link>
        </div>
      </div>
    )
}

export default Register;
