import React from 'react';
import GoogleSignIn from './GoogleSignIn';

function SignUp() {
  return (
    <div className='flex justify-center items-center h-screen bg-black'>
      <div className='w-full max-w-md'>
        <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
          {GoogleSignIn()}
        </form>
        <GoogleSignIn />
      </div>
    </div>
  );
}

export default SignUp;
