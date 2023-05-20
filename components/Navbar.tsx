import React, { useCallback, useEffect, useState } from 'react';
import NetfuixLogo from './svg/NetfuixLogo';
import NavbarItem from './NavbarItem';
import MobileMenu from './MobileMenu';
import { AiFillCaretDown } from 'react-icons/ai';
import SearchIcon from './svg/SearchIcon';
import BellIcon from './svg/BellIcon';
import Image from 'next/image';
import AccountMenu from './AccountMenu';

const TOP_OFFSET = 66;

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, []);

  const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu((current) => !current);
  }, []);

  return (
    <nav className='w-full fixed z-50'>
      <div
        className={`px-4 md:px-[30px] lg:px-16 py-3 lg:py-5 flex flex-row items-center transition duration-500 ${
          showBackground
            ? 'bg-dark-netfuix'
            : 'bg-gradient-to-b from-dark-netfuix to-transparent'
        }`}
      >
        <NetfuixLogo classes='h-5 lg:h-[25px] w-auto text-red-netfuix block fill-current' />
        <div className='flex-row ml-10 gap-5 hidden lg:flex'>
          <NavbarItem label='Home' />
          <NavbarItem label='TV Shows' />
          <NavbarItem label='Movies' />
          <NavbarItem label='New & Popular' />
          <NavbarItem label='Browse by Languages' />
        </div>
        <div
          onClick={toggleMobileMenu}
          className='lg:hidden flex flex-row items-center gap-1 ml-3 md:ml-6 cursor-pointer relative'
        >
          <p className='font-semibold text-white'>Browse</p>
          <AiFillCaretDown
            className={`text-white w-3 mt-[1px] transition ${
              showMobileMenu ? 'rotate-180' : 'rotate-0'
            }`}
          />
          <MobileMenu visible={showMobileMenu} />
        </div>
        <div className='flex flex-row ml-auto gap-2 md:gap-5 items-center font-semibold'>
          <div className='text-gray-200 hover:text-gray-300 cursor-pointer'>
            <SearchIcon />
          </div>
          <div className='text-gray-200 hover:text-gray-300 cursor-pointer'>
            Kids
          </div>
          <div className='text-gray-200 hover:text-gray-300 cursor-pointer'>
            <BellIcon />
          </div>
          <div
            onClick={toggleAccountMenu}
            className='flex flex-row items-center gap-2 cursor-pointer relative'
          >
            <div className='w-6 h-6 lg:w-8 lg:h-8 rounded-[4px] overflow-hidden'>
              <Image
                src='/images/default-red.png'
                width={32}
                height={32}
                alt='Profile'
              />
            </div>
            <AiFillCaretDown
              className={`text-white w-3 mt-[1px] transition ${
                showAccountMenu ? 'rotate-180' : 'rotate-0'
              }`}
            />
            <AccountMenu visible={showAccountMenu} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
