import React from 'react';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import { AiFillCaretUp } from 'react-icons/ai';
import PencilIcon from './svg/PencilIcon';
import ExitIcon from './svg/ExitIcon';
import TransferIcon from './svg/TransferIcon';
import AccountIcon from './svg/AccountIcon';
import HelpIcon from './svg/HelpIcon';
import useCurrentUser from '../hooks/useCurrentUser';

interface AccountMenuProps {
  visible?: boolean;
}

const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {
  const { data } = useCurrentUser();

  if (!visible) {
    return null;
  }

  return (
    <>
      <AiFillCaretUp className='absolute top-[2.4rem] text-white w-56 -left-24 z-10' />
      <div className='bg-black w-56 absolute top-[50px] right-0 py-3 pt-4 flex-col border border-zinc-700 flex'>
        <div className='flex flex-col gap-3'>
          <div className='px-3 group/item flex flex-row gap-3 items-center w-full'>
            <Image
              className='w-8 rounded-[4px]'
              src='/images/default-red.png'
              width={32}
              height={32}
              alt='Profile'
            />
            <p className='text-white text-sm group-hover/item:underline'>
              {data?.name}
            </p>
          </div>
          <div className='px-3 group/item flex flex-row gap-3 items-center w-full'>
            <PencilIcon />
            <p className='text-white text-sm group-hover/item:underline'>
              Manage Profiles
            </p>
          </div>
          <div className='px-3 group/item flex flex-row gap-3 items-center w-full'>
            <ExitIcon />
            <p className='text-white text-sm group-hover/item:underline'>
              Exit Profile
            </p>
          </div>
          <div className='px-3 group/item flex flex-row gap-3 items-center w-full'>
            <TransferIcon />
            <p className='text-white text-sm group-hover/item:underline'>
              Transfer Profile
            </p>
          </div>
          <div className='px-3 group/item flex flex-row gap-3 items-center w-full'>
            <AccountIcon />
            <p className='text-white text-sm group-hover/item:underline'>
              Account
            </p>
          </div>
          <div className='px-3 group/item flex flex-row gap-3 items-center w-full'>
            <HelpIcon />
            <p className='text-white text-sm group-hover/item:underline'>
              Help Center
            </p>
          </div>
          <hr className='bg-zinc-700 border-0 h-px mt-2' />
          <div
            onClick={() => signOut()}
            className='px-3 text-center text-white text-sm hover:underline'
          >
            Sign out of Netfuix
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountMenu;
