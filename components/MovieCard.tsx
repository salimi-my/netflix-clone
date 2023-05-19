import Image from 'next/image';
import React from 'react';
import { BsFillPlayFill } from 'react-icons/bs';
import FavouriteButton from './FavouriteButton';

interface MovieCardProps {
  data: Record<string, any>;
}

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
  return (
    <div className='group bg-dark-netfuix col-span relative h-[109px] md:h-[131px] lg:h-[130px] xl:h-[121px] 2xl:h-[165px] rounded-md'>
      <Image
        src={data.thumbnailUrl}
        alt='Movie'
        fill={true}
        sizes='(max-width: 767px) 50vw, (max-width: 1023px) 33vw, (max-width: 1279px) 25vw, (max-width: 1535px) 25vw, 16vw'
        draggable={false}
        className='cursor-pointer object-cover transition duration-0 shadow-md rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 w-full h-[109px] md:h-[131px] lg:h-[130px] xl:h-[121px] 2xl:h-[165px]'
      />
      <div className='opacity-0 absolute top-0 transition duration-300 z-10 invisible sm:visible delay-200 w-full scale-0 md:group-hover:scale-95 lg:group-hover:scale-110 xl:group-hover:scale-125 2xl:group-hover:scale-[1.45] group-hover:-translate-y-[5vw] group-hover:opacity-100'>
        <div className='relative cursor-pointer object-cover transition duration shadow-md rounded-t-md w-full h-[109px] md:h-[131px] lg:h-[130px] xl:h-[121px] 2xl:h-[165px] overflow-hidden'>
          <Image
            src={data.thumbnailUrl}
            alt='Movie'
            fill={true}
            sizes='(max-width: 767px) 50vw, (max-width: 1023px) 33vw, (max-width: 1279px) 25vw, (max-width: 1535px) 25vw, 16vw'
            draggable={false}
            className='object-cover'
          />
        </div>
        <div className='z-10 bg-[#181818] p-2 lg:py-3 lg:px-4 absolute w-full transition shadow-md rounded-b-md'>
          <div className='flex flex-row items-center gap-3'>
            <div
              onClick={() => {}}
              className='cursor-pointer w-6 h-6 lg:w-7 lg:h-7 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300'
            >
              <BsFillPlayFill size={30} className='ml-[3px]' />
            </div>
            <FavouriteButton movieId={data?.id} />
          </div>
          <div className='flex flex-row mt-3 gap-2 items-center text-xs'>
            <p className='text-green-400 font-semibold'>New</p>
            <div className='border border-gray-500 text-white leading-none px-[3px] py-[1px]'>
              13+
            </div>
            <p className='text-white font-semibold'>{data.duration}</p>
            <div className='border border-gray-500 text-white leading-none text-[0.4rem] px-[3px] py-[1px]'>
              HD
            </div>
          </div>
          <div className='flex flex-row items-center gap-2 mt-1 text-[8px] lg:text-xs text-white'>
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
                      <span className='mr-[6px] -mt-[2px] text-gray-500 text-xl'>
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
