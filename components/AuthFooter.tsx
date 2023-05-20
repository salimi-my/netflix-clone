import React from 'react';
import { BsGlobe, BsChevronDown } from 'react-icons/bs';
import { HiOutlineChevronDown } from 'react-icons/hi';

const AuthFooter = () => {
  return (
    <footer className='w-full min-w-[190px] bg-black md:bg-opacity-75 border-t border-[#737373] md:border-none'>
      <div className='w-full px-4 md:px-0 md:w-[90%] md:mx-auto md:max-w-[1000px] py-[30px]'>
        <p className='text-[#737373] mb-[30px]'>
          Questions? Email me at{' '}
          <a
            href='mailto:contact@salimi.my'
            className='hover:underline cursor-pointer'
          >
            contact@salimi.my
          </a>
        </p>
        <ul className='text-[#737373] box-border text-[13px] max-w-[1000px]'>
          <li className='box-border inline-block mb-4 minw-[100px] pr-3 align-top w-[50%] md:w-[25%]'>
            <p className='hover:underline cursor-pointer'>FAQ</p>
          </li>
          <li className='box-border inline-block mb-4 minw-[100px] pr-3 align-top w-[50%] md:w-[25%]'>
            <p className='hover:underline cursor-pointer'>Help Center</p>
          </li>
          <li className='box-border inline-block mb-4 minw-[100px] pr-3 align-top w-[50%] md:w-[25%]'>
            <p className='hover:underline cursor-pointer'>Terms of Use</p>
          </li>
          <li className='box-border inline-block mb-4 minw-[100px] pr-3 align-top w-[50%] md:w-[25%]'>
            <p className='hover:underline cursor-pointer'>Privacy</p>
          </li>
          <li className='box-border inline-block mb-4 minw-[100px] pr-3 align-top w-[50%] md:w-[25%]'>
            <p className='hover:underline cursor-pointer'>Cookie Preferences</p>
          </li>
          <li className='box-border inline-block mb-4 minw-[100px] pr-3 align-top w-[50%] md:w-[25%]'>
            <p className='hover:underline cursor-pointer'>
              Corporate Information
            </p>
          </li>
        </ul>
        <div className='mt-5 text-[#737373]'>
          <div className='inline-flex items-center justify-between bg-black border border-[#333] py-3 px-4'>
            <div className='flex items-center'>
              <BsGlobe />
              <p className='text-[13px] pl-3 pr-6'>English</p>
            </div>
            <HiOutlineChevronDown />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AuthFooter;
