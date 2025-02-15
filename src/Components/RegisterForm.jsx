import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaGithub } from 'react-icons/fa6';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
const RegisterForm = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [emailError, setEmailError] = useState('');
  let [passwordError, setPasswordError] = useState('');

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordError('');
  };

  const handleSignup = () => {
    if (!email) {
      setEmailError('Email Is required');
      return;
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setEmailError('Invalid email Address');
      return;
    }
    if (!password) {
      setPasswordError('Enter Valid Pasword');
    }
    if (password.length < 8) {
      setPasswordError('Password Must be contain 8 character');
    }

    if (password && email && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          sendEmailVerification(auth.currentUser).then(() => {
            console.log('Verification email send');
            
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          if (errorCode.includes('auth/email-already-in-use')) {
            setEmailError('Email Already in use');
          }
        });
    }
  };
  const googleSignup =()=>{
    const auth = getAuth();
    const provider =new GoogleAuthProvider();
    signInWithPopup(auth,provider).then(async(result)=>{
      console.log(result.user.displayName);
      if(result.user){
        navigate('/login');
      }
    })
  }
  return (
    <>
      <div className='registerForm container mx-auto flex flex-col items-center lg:flex-row gap-4 my-8 px-4 lg:px-0'>
        <div className='info border shadow-md rounded-md mx-auto p-6 w-full  lg:w-1/2'>
          <div className='flex flex-col gap-2 mb-4'>
            <label className='text-left lg:text-lg'>Your Email</label>
            <input type='email' placeholder='youremail@gmail.com' onChange={handleEmail} name='email' className='border rounded-md px-2 p-2 focus:ring-0 focus:outline-none' />
            {emailError && <p className='text-red-500 text-sm'>{emailError}</p>}
          </div>
          <div className='flex flex-col gap-2'>
            <label className='text-left lg:text-lg'>Password</label>
            <input type='password' placeholder='Password' onChange={handlePassword} className='border rounded-md px-2 p-2 focus:ring-0 focus:outline-none' />
            {passwordError && <p className='text-red-500 text-sm'>{passwordError}</p>}
          </div>

          <button onClick={handleSignup} className='my-4 bg-black text-white w-full py-3 active:bg-gray-700 hover:text-gray-200 rounded-md'>
            Register
          </button>

          <p className='text-base'>
            Already Have an account?
            <Link to={'/login'}>
              <span className='font-medium hover:text-gray-500'>Login Here</span>
            </Link>
          </p>
        </div>
        <div className='hle border shadow-md rounded-md mx-auto py-8 px-6 w-full  lg:w-1/3'>
          <h2 className='my-4 text-center lg:text-xl'>Login with Another Medium</h2>
          <div className='goggle-login mb-8'>
            <button onClick={googleSignup} className='flex w-full py-2 text-black transition-all duration-300 hover:border-black text-lg border justify-center gap-2 items-center rounded-md'>
              <FcGoogle />
              Signup With Google
            </button>
          </div>
          <div className='github-login  mb-8'>
            <button className='flex w-full py-2 text-black transition-all duration-300 hover:border-black text-lg border justify-center gap-2 items-center rounded-md'>
              <FaGithub />
              Signup With Facebook
            </button>
          </div>
          <div className='facebook-login mb-8'>
            <button className='flex w-full py-2 text-black transition-all duration-300 hover:border-black text-lg border justify-center gap-2 items-center rounded-md'>
              <FaFacebook />
              Signup With Facebook
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
