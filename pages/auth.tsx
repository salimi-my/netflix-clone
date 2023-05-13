import React, { useCallback, useState } from 'react';
import NetfuixLogo from '../components/svg/NetfuixLogo';
import Input from '../components/Input';
import axios from 'axios';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

const Auth = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const [variant, setVariant] = useState('login');

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant == 'login' ? 'register' : 'login'
    );
  }, []);

  const login = useCallback(async () => {
    try {
      await signIn('credentials', {
        email,
        password,
        redirect: false,
        callbackUrl: '/browse'
      });

      router.push('/browse');
    } catch (error) {
      console.log(error);
    }
  }, [email, password, router]);

  const register = useCallback(async () => {
    try {
      await axios.post('/api/register', {
        email,
        name,
        password
      });

      login();
    } catch (error) {
      console.log(error);
    }
  }, [email, name, password, login]);

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className='bg-black w-full h-full lg:bg-opacity-50'>
        <nav className='px-12 py-5'>
          <NetfuixLogo />
        </nav>
        <div className='flex justify-center'>
          <div className='bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:max-w-md rounded-sm w-full'>
            <h2 className='text-white text-4xl mb-8 font-bold'>
              {variant == 'login' ? 'Sign In' : 'Sign Up'}
            </h2>
            <div className='flex flex-col gap-4'>
              {variant == 'register' && (
                <Input
                  label='Username'
                  onChange={(e: {
                    target: { value: React.SetStateAction<string> };
                  }) => setName(e.target.value)}
                  id='name'
                  value={name}
                />
              )}
              <Input
                label='Email or phone number'
                onChange={(e: {
                  target: { value: React.SetStateAction<string> };
                }) => setEmail(e.target.value)}
                id='email'
                type='email'
                value={email}
              />
              <Input
                label='Password'
                onChange={(e: {
                  target: { value: React.SetStateAction<string> };
                }) => setPassword(e.target.value)}
                id='password'
                type='password'
                value={password}
              />
            </div>
            <button
              onClick={variant == 'login' ? login : register}
              className='bg-red-netfuix py-3 font-semibold text-white rounded-md w-full mt-10 hover:bg-red-netfuix-dark transition'
            >
              {variant == 'login' ? 'Sign In' : 'Sign Up'}
            </button>

            <div className='my-7 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-500 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-500'>
              <p className='mx-4 mb-0 text-center font-semibold text-neutral-500'>
                Or continue with
              </p>
            </div>

            <div
              onClick={() => signIn('google', { callbackUrl: '/browse' })}
              className='flex flex-row items-center gap-4 justify-center'
            >
              <div className='w-full bg-white rounded-md flex items-center justify-center cursor-pointer hover:opacity-80 transition py-[0.4rem]'>
                <FcGoogle size={24} className='mr-[0.4rem] h-6' />
                <span className='text-gray-900 font-semibold'>Google</span>
              </div>
              <div
                onClick={() => signIn('github', { callbackUrl: '/browse' })}
                className='w-full bg-neutral-600 rounded-md flex items-center justify-center cursor-pointer hover:opacity-80 transition py-[0.4rem]'
              >
                <FaGithub size={24} className='mr-[0.4rem] h-6 text-zinc-50' />
                <span className='text-zinc-50 font-semibold'>Github</span>
              </div>
            </div>

            <p className='text-neutral-500 mt-12'>
              {variant == 'login'
                ? 'New to Netfuix?'
                : 'Already have an account?'}
              <span
                onClick={toggleVariant}
                className='text-white font-medium ml-1 hover:underline cursor-pointer'
              >
                {variant == 'login' ? 'Sign up now' : 'Sign in here'}
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
