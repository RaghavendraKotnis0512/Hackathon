import React, { useState } from 'react';


function SignUp() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className='flex justify-center items-center h-screen bg-gray-100 rounded'>
      <div className='w-full max-w-md'>
        <form onSubmit={SignUp} className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
          <h2 className='text-2xl font-bold text-center mb-4'>Sign Up</h2>
          <div className='mb-4'>
            <label htmlFor='email' className='block text-gray-700 text-sm font-bold mb-2'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              className='border border-gray-400 rounded-md px-4 py-2 w-full'
              placeholder='Enter your email'
              required
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='password' className='block text-gray-700 text-sm font-bold mb-2'>Password</label>
            <input
              type='password'
              id='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              className='border border-gray-400 rounded-md px-4 py-2 w-full'
              placeholder='Enter your password'
              minLength='6'
              required
            />
          </div>
          <div className='flex justify-center'>
            <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'>Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
