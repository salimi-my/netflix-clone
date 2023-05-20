import React from 'react';
import { BsFillPlayFill } from 'react-icons/bs';
import { useRouter } from 'next/router';

interface PlayButtonProps {
  movieId: string;
}

const PlayButton: React.FC<PlayButtonProps> = ({ movieId }) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(`/watch/${movieId}`)}
      className='bg-white rounded-[4px] py-0 px-2 md:px-4 lg:px-6 w-auto text-xs md:text-base lg:text-xl font-bold flex flex-row items-center hover:bg-neutral-300 transition'
    >
      <BsFillPlayFill className='mr-1 text-[26px] md:text-4xl lg:text-5xl' />
      Play
    </button>
  );
};

export default PlayButton;
