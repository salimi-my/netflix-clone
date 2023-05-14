import React from 'react';
import { AiFillCaretUp } from 'react-icons/ai';

interface MobileMenuProps {
  visible?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <>
      <AiFillCaretUp className='absolute top-[2.4rem] text-white w-64 -left-[90px] z-10' />
      <div className='bg-black w-64 absolute top-12 -left-[90px] flex-col border border-zinc-700 border-t-2 border-t-white flex'>
        <div className='flex flex-col'>
          <div className='px-3 py-4 text-center text-white hover:underline text-sm'>
            Home
          </div>
          <div className='px-3 py-4 text-center text-white hover:underline text-sm'>
            TV Shows
          </div>
          <div className='px-3 py-4 text-center text-white hover:underline text-sm'>
            Movies
          </div>
          <div className='px-3 py-4 text-center text-white hover:underline text-sm'>
            New & Popular
          </div>
          <div className='px-3 py-4 text-center text-white hover:underline text-sm'>
            My List
          </div>
          <div className='px-3 py-4 text-center text-white hover:underline text-sm'>
            Browse by Languages
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
