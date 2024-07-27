import React, { useState } from 'react';
import userIcon from '../Asset/user-icon-png.webp';

function Design2() {
  const [email, setEmail] = useState("");  //to set email value
  const [password , setPassword] = useState(""); // to set passworrd
  const [isEmailValidate , setIsEmailValidate] = useState(false); //to toggle border of email-input
  const [isPasswordValidate , setIsPasswordValidate] =  useState(false); //to toggle border of password input field

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle email change and validation
  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    if (validateEmail(newEmail)) {
      setIsEmailValidate(true);
    }
    else{
        setIsEmailValidate(false);
    }
    
    console.log("Validated-email => ", isEmailValidate);
  };

  // Password validation function
  const validatePassword = (password) => {
    return password.length >= 8;
  };

  // Handle password change and validation
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    
    validatePassword(newPassword) ? setIsPasswordValidate(true) : setIsPasswordValidate(false);
  };

  return (
    <div className='border-black border-2 w-full h-screen flex flex-col justify-center items-center'>
      <img src={userIcon} alt='logo' width="150px" />

      <input
        type='email'
        value={email}
        onChange={(e) => handleEmailChange(e)}
        placeholder='E-mail address'
        className={`border-2 outline-none p-2 my-4 ${isEmailValidate ? 'border-green-500' : 'border-red-500'}`}
      />

<input
        type='password'
        value={password}
        onChange={(e) => handlePasswordChange(e)}
        placeholder='Password'
        className={`border-2 outline-none p-2 mb-4 ${isPasswordValidate ? 'border-green-500' : 'border-red-500'}`}
      />
    </div>
  );
}

export default Design2;
