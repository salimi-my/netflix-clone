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
        className='cursor-pointer object-cover transition duration-0 shadow-lg rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 w-full h-[12vw]'
      />
      <div className='opacity-0 absolute top-0 transition duration-300 z-10 invisible sm:visible delay-200 w-full scale-0 group-hover:scale-110 group-hover:-translate-y-[5vw] group-hover:opacity-100'>
        <div className='relative cursor-pointer object-cover transition duration shadow-lg rounded-t-md w-full h-[12vw] overflow-hidden'>
          <Image
            src={data.thumbnailUrl}
            alt='Movie'
            fill={true}
            draggable={false}
            className='object-cover'
          />
        </div>
        <div className='z-10 bg-[#181818] p-2 lg:p-4 absolute w-full transition shadow-lg rounded-b-md'>
          <div className='flex flex-row items-center gap-3'>
            <div
              onClick={() => {}}
              className='cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300'
            >
              <BsFillPlayFill size={30} className='ml-[3px]' />
            </div>
          </div>
          <div className='flex flex-row mt-4 gap-2 items-center'>
            <p className='text-green-400 font-semibold'>New</p>
            <div className='border border-gray-500 text-white leading-none px-[6px] py-[2px]'>
              13+
            </div>
            <p className='text-white font-semibold'>{data.duration}</p>
            <div className='border border-gray-500 text-white leading-none text-[0.7rem] px-[6px] py-[1px] pb-[2px]'>
              HD
            </div>
          </div>
          <div className='flex flex-row items-center gap-2 mt-2 text-[8px] lg:text-base text-white'>
            <div className='flex items-center font-semibold'>
              {data.genre.map((genre: any, index: any, genres: any) => {
                if (index + 1 === genres.length) {
                  return (
                    <div
                      key={index}
                      className='flex items-center justify-center'
                    >
                      <span className='mr-[6px]'>{genre}</span>
                    </div>
                  );
                } else {
                  return (
                    <div
                      key={index}
                      className='flex items-center justify-center'
                    >
                      <span className='mr-[6px]'>{genre}</span>
                      <span className='mr-[6px] -mt-[2px] text-gray-500 text-2xl'>
                        &bull;
                      </span>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
