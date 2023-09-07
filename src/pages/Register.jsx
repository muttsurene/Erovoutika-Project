import React from 'react'
import signUpWithEmailPassword from '../lib/auth/withEmailPassRegister';

function Register() {

  function onSubmit(e){
    e.preventDefault();
    if(e.target.password.value === e.target.password2.value){
      signUpWithEmailPassword(e.target.email.value, e.target.password.value, () => {
        window.location.href = '/';
      });

    }
  }

  return (
    <div className="container max-w-screen-sm mx-auto px-2 pt-4">
        <form className='bg-white border shadow-md rounded-lg flex flex-col gap-2 w-fit p-4' onSubmit={onSubmit}>
          <p className='text-3xl text-center mb-3'>Register</p>
          <label>Email</label>
          <input className='border' name="email" type="text" />
          <label>Password</label>
          <input className='border' name="password" type="password" />
          <label>Confirm Password</label>
          <input className='border' name="password2" type="password" />
          <br />
          <button className='bg-blue-500 text-white p-3' type="submit">Login</button>
        </form>
        <button className='text-blue-800 w-full mx-auto text-center my-5' onClick={() => {
          window.location.href = "/login";
        }}>Already have an Account</button>
    </div>
  );
}

export default Register;
