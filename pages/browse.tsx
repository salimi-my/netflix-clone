import type { NextPage, NextPageContext } from 'next';
import { getSession, signOut } from 'next-auth/react';
import useCurrentUser from '../hooks/useCurrentUser';
import Navbar from '../components/Navbar';

const Browse: NextPage = () => {
  const { data: user } = useCurrentUser();

  return (
    <>
      <Navbar />
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
