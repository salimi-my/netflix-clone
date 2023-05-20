import type { NextPage, NextPageContext } from 'next';
import { getSession } from 'next-auth/react';
import Navbar from '../components/Navbar';
import Billboard from '../components/Billboard';
import MovieList from '../components/MovieList';
import useMovieList from '../hooks/useMovieList';
import useFavourites from '../hooks/useFavourites';
import InfoModal from '../components/InfoModal';
import useInfoModal from '../hooks/useInfoModal';

const Browse: NextPage = () => {
  const { data: movies = [] } = useMovieList();
  const { data: favourites = [] } = useFavourites();
  const { isOpen, closeModal } = useInfoModal();

  return (
    <>
      <InfoModal visible={isOpen} onClose={closeModal} />
      <Navbar />
      <Billboard />
      <div className='mb-40 relative z-10 -top-[calc(7.4vw_+_8.5vw)]'>
        <MovieList title='Trending Now' data={movies} />
      </div>
      <div className='relative z-10 -top-56 md:-top-[280px] lg:-top-[350px] xl:-top-[430px] 2xl:-top-[520px]'>
        <MovieList title='My List' data={favourites} />
        <MovieList
          title='New Releases'
          data={movies}
          common={favourites.length > 0}
        />
        <MovieList title='Popular on Netfuix' data={movies} common={true} />
        <MovieList title='Top Searches' data={movies} common={true} />
        <MovieList title='Top Picks for You' data={movies} common={true} />
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
