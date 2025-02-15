import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaGithub } from 'react-icons/fa6';
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
const LoginForm = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [emailError, setEmailError] = useState('');
  let [passwordError, setPasswordError] = useState('');
  let [credentialError, setCredentialError]= useState('');
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailError('');
    setCredentialError('');
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordError('');
    setCredentialError('');
  };
  const handleLogin = () => {
    if (!email) {
      setEmailError('Please Enter Your Email');
      return;
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setEmailError('Invalid email Address');
      return;
    }
    if (!password) {
      setPasswordError('Enter Valid Pasword');
    }
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate('/my-account');
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        
        if (errorCode.includes('auth/invalid-credential')) {
          setCredentialError('Invalid Credential');
        }
        
      });
  };
  
  const googleSignIn =()=>{
      const auth = getAuth();
      const provider =new GoogleAuthProvider();
      signInWithPopup(auth,provider).then(async(result)=>{
        console.log(result.user.displayName);
        if(result.user){
          navigate('/my-account');
        }
      })
    }
  return (
    <>
      <div className='registerForm container mx-auto flex flex-col items-center lg:flex-row gap-4 my-8 px-4 lg:px-0'>
        <div className='info border shadow-md rounded-md mx-auto p-6 w-full  lg:w-1/2'>
        {credentialError && <p className='bg-red-500 text-white font-semibold text-lg text-center py-1'>{credentialError}</p>}
          <div className='flex flex-col gap-2 mb-4'>
            <label className='text-left lg:text-lg'>Your Email</label>
            <input type='email' placeholder='youremail@gmail.com' onChange={handleEmail} className='border rounded-md px-2 p-2 focus:ring-0 focus:outline-none' required />
            {emailError && <p className='text-red-500 text-sm'>{emailError}</p>}
          </div>
          <div className='flex flex-col gap-2'>
            <label className='text-left lg:text-lg'>Password</label>
            <input type='password' placeholder='Password' onChange={handlePassword} name='password' className='border rounded-md px-2 p-2 focus:ring-0 focus:outline-none' />
            {passwordError && <p className='text-red-500 text-sm'>{passwordError}</p>}
          </div>

          <button onClick={handleLogin} className='my-4 bg-black text-white w-full py-3 active:bg-gray-700 hover:text-gray-200 rounded-md'>
            Login
          </button>

          <p className='text-base'>
            Don't Have an account?{' '}
            <Link to={'/register'}>
              <span className='font-medium hover:text-gray-500'>Create One</span>
            </Link>
          </p>
        </div>
        <div className='hle border shadow-md rounded-md mx-auto py-8 px-6 w-full  lg:w-1/3'>
          <h2 className='my-4 text-center lg:text-xl'>Signup with Another Medium</h2>
          <div className='goggle-login mb-8'>
            <button onClick={googleSignIn} className='flex w-full py-2 text-black transition-all duration-300 hover:border-black text-lg border justify-center gap-2 items-center rounded-md'>
              <FcGoogle />
              Login With Google
            </button>
          </div>
          <div className='github-login  mb-8'>
            <button className='flex w-full py-2 text-black transition-all duration-300 hover:border-black text-lg border justify-center gap-2 items-center rounded-md'>
              <FaGithub />
              Login With Github
            </button>
          </div>
          <div className='facebook-login mb-8'>
            <button className='flex w-full py-2 text-black transition-all duration-300 hover:border-black text-lg border justify-center gap-2 items-center rounded-md'>
              <FaFacebook />
              Login With Facebook
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
