import type { NextPage, NextPageContext } from 'next';
import { getSession, signOut } from 'next-auth/react';
import useCurrentUser from '../hooks/useCurrentUser';

const Browse: NextPage = () => {
  const { data: user } = useCurrentUser();

  return (
    <>
      <main>
        <h1 className='text-2xl text-red-netfuix'>Netfuix Browse</h1>
        <p className='text-white'>Logged in as: {user?.name}</p>
        <button onClick={() => signOut()} className='h-10 w-full bg-white'>
          Sign out
        </button>
      </main>
    </>
  );
};

export default Browse;

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
