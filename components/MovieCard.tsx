import Image from 'next/image';
import React from 'react';
import { BsFillPlayFill } from 'react-icons/bs';

interface MovieCardProps {
  data: Record<string, any>;
}

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
  return (
    <div className='group bg-dark-netfuix col-span relative h-[12vw]'>
      <Image
        src={data.thumbnailUrl}
        alt='Movie'
        fill={true}
        draggable={false}
        className='cursor-pointer object-cover transition duration-0 shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 w-full h-[12vw]'
      />
      <div className='opacity-0 absolute top-0 transition duration-200 z-10 invisible sm:visible delay-300 w-full scale-0 group-hover:scale-110 group-hover:-translate-y-[6vw] group-hover:translate-x-[2vw] group-hover:opacity-100'>
        <div className='relative cursor-pointer object-cover transition duration shadow-xl rounded-t-md w-full h-[12vw] overflow-hidden'>
          <Image
            src={data.thumbnailUrl}
            alt='Movie'
            fill={true}
            draggable={false}
            className='object-cover'
          />
        </div>
        <div className='z-10 bg-[#181818] p-2 lg:p-4 absolute w-full transition shadow-xl rounded-b-md'>
          <div className='flex flex-row items-center gap-3'>
            <div
              onClick={() => {}}
              className='cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300'
            >
              <BsFillPlayFill size={30} className='ml-[3px]' />
            </div>
          </div>
          <p className='text-green-400 font-semibold mt-4'>
            New <span className='text-white'>2023</span>
          </p>
          <div className='flex flex-row mt-4 gap-2 items-center'>
            <p className='text-white text-[10px] lg:text-sm'>{data.duration}</p>
          </div>
          <div className='flex flex-row items-center gap-2 mt-4 text-[8px] text-white lg:text-sm'>
            <p>{data.genre}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
