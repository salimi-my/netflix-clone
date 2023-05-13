import { NextPage, NextPageContext } from 'next';
import { getSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';
import useCurrentUser from '../hooks/useCurrentUser';
import { useRouter } from 'next/router';

const Profile: NextPage = () => {
  const router = useRouter();
  const { data: user } = useCurrentUser();

  return (
    <div className='flex items-center h-full justify-center'>
      <div className='flex flex-col'>
        <h1 className='text-3xl md:text-6xl text-white text-center'>
          Who&apos;s watching?
        </h1>
        <div className='flex items-center justify-center gap-8 mt-10'>
          <div
            onClick={() => {
              router.push('/browse');
            }}
          >
            <div className='group flex-row w-44 mx-auto'>
              <div className='relative w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden'>
                <Image
                  src='/images/default-red.png'
                  width={176}
                  height={176}
                  alt='Profile'
                />
              </div>
              <div className='mt-4 text-zinc-500 text-2xl text-center group-hover:text-white'>
                {user?.name}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false
      }
    };
  }

  return {
    props: {}
  };
}
