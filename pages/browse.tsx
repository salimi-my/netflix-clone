import type { NextPage, NextPageContext } from 'next';
import { getSession } from 'next-auth/react';
import Navbar from '../components/Navbar';
import Billboard from '../components/Billboard';
import MovieList from '../components/MovieList';
import useMovieList from '../hooks/useMovieList';
import useFavourites from '../hooks/useFavourites';

const Browse: NextPage = () => {
  const { data: movies = [] } = useMovieList();
  const { data: favourites = [] } = useFavourites();

  return (
    <>
      <Navbar />
      <Billboard />
      <div className='pb-40 relative z-10 -top-[calc(7.4vw_+_8.5vw)]'>
        <MovieList title='Trending Now' data={movies} />
        <MovieList title='My List' data={favourites} />
      </div>
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
