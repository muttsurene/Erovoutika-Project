import React from 'react'
import signInWithEmailPassword from '../lib/auth/withEmailPass';
import signInGooglePopUp from '../lib/auth/withGoogle';

function Login() {

  function onSubmit(e){
    e.preventDefault();
    signInWithEmailPassword(e.target.email.value, e.target.password.value, () => {
      window.location.href = '/';
    });
  }

  return (
    <div className="container max-w-screen-sm mx-auto px-2 pt-4">
        <form className='bg-white border shadow-md rounded-lg flex flex-col gap-2 w-fit p-4' onSubmit={onSubmit}>
          <p className='text-3xl text-center mb-3'>Login</p>
          
          <label>Email</label>
          <input className='border' name="email" type="text" />
          <label>Password</label>
          <input className='border' name="password" type="password" />
          <br />
          <button className='bg-blue-500 text-white p-3' type="submit">Login</button>
          
        </form>
        <button className='border-2 p-1 border-blue-500 rounded-md w-full bg-white mt-2' onClick={
            () => {
              signInGooglePopUp({}, () => {
                window.location.href = '/';
                });
            }
          }>Login With Google</button>
        <button className='text-blue-800 w-full mx-auto text-center my-5' onClick={() => {
          window.location.href = "/register";
        }}>Create an Account</button>
    </div>
  );
}

export default Login;
