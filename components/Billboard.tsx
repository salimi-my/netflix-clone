import React, { useEffect, useState, useRef } from 'react';
import useBillboard from '../hooks/useBillboard';
import { AiOutlineInfoCircle } from 'react-icons/ai';

const Billboard = () => {
  const { data } = useBillboard();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (videoRef != null) {
        videoRef.current?.play();
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='relative h-[56.25vh]'>
      <video
        ref={videoRef}
        loop
        poster={data?.thumbnailUrl}
        src={data?.videoUrl}
        className='w-full h-[56.25vw] object-cover brightness-[60%]'
      ></video>
      <div className='absolute top-[30%] md:top-[40%] ml-4 md:ml-16'>
        <p className='text-white text-xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl'>
          {data?.title}
        </p>
        <p className='text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl'>
          {data?.description}
        </p>
        <div className='flex flex-row items-center mt-3 md:mt-4 gap-3'>
          <button className='bg-[rgba(109,109,110,0.7)] text-white rounded-[4px] py-1 md:py-2 px-2 md:px-6 w-auto text-xs md:text-xl font-bold flex flex-row items-center hover:bg-opacity-20 transition'>
            <AiOutlineInfoCircle className='mr-1 md:mr-3 text-lg md:text-3xl' />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
