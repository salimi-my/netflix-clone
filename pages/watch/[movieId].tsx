import React from 'react';
import { useRouter } from 'next/router';
import useMovie from '../../hooks/useMovie';
import { HiOutlineArrowLeft } from 'react-icons/hi';

const Watch = () => {
  const router = useRouter();
  const { movieId } = router.query;

  const { data } = useMovie(movieId as string);

  return (
    <div className='h-screen w-screen bg-black'>
      <nav className='fixed w-full p-4 z-10 flex flex-row items-center gap-4 md:gap-8 bg-black bg-opacity-70'>
        <HiOutlineArrowLeft
          onClick={() => router.push('/browse')}
          className='w-4 md:w-10 font-extrabold text-5xl text-white cursor-pointer hover:opacity-80 transition'
        />
        <p className='text-white text-1xl md:text-3xl font-bold'>
          <span className='font-normal'>Watching:</span> {data?.title}
        </p>
      </nav>
      <video
        className='h-full w-full'
        autoPlay
        controls
        controlsList='nodownload'
        src={data?.videoUrl}
      ></video>
    </div>
  );
};

export default Watch;
