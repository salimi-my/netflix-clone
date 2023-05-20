import React from 'react';
import { BsFillPlayFill } from 'react-icons/bs';
import { useRouter } from 'next/router';

interface PlayButtonProps {
  movieId: string;
  isModal?: boolean;
}

const PlayButton: React.FC<PlayButtonProps> = ({ movieId, isModal }) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(`/watch/${movieId}`)}
      className={`bg-white rounded-[4px] py-0 w-auto text-xs md:text-base lg:text-xl font-bold flex flex-row items-center hover:bg-neutral-300 transition ${
        isModal ? 'px-2 md:px-4 lg:px-4' : 'px-2 md:px-4 lg:px-6'
      }`}
    >
      <BsFillPlayFill
        className={`mr-1 ${
          isModal
            ? 'text-[26px] md:text-4xl lg:text-4xl'
            : 'text-[26px] md:text-4xl lg:text-5xl'
        }`}
      />
      Play
    </button>
  );
};

export default PlayButton;
