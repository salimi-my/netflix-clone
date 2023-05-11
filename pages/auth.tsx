import React, { useState } from 'react';
import NetflixLogo from '../components/svg/NetflixLogo';
import Input from '../components/Input';

const Auth = () => {
  const [email, setEmail] = useState('');

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className='bg-black w-full h-full lg:bg-opacity-50'>
        <nav className='px-12 py-5'>
          <NetflixLogo />
        </nav>
        <div className='flex justify-center'>
          <div className='bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:max-w-md rounded-sm w-full'>
            <h2 className='text-white text-4xl mb-8 font-bold'>Sign In</h2>
            <div className='flex flex-col gap-4'>
              <Input
                label='Email or phone number'
                onChange={(e: {
                  target: { value: React.SetStateAction<string> };
                }) => setEmail(e.target.value)}
                id='email'
                type='email'
                value={email}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
