import React, { useEffect, useState, useRef, useCallback } from 'react';
import useBillboard from '../hooks/useBillboard';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import PlayButton from './PlayButton';
import useInfoModal from '../hooks/useInfoModal';

const Billboard = () => {
  const { data } = useBillboard();
  const videoRef = useRef<HTMLVideoElement>(null);
  const { openModal } = useInfoModal();

  const handleOpenModal = useCallback(() => {
    openModal(data?.id);
  }, [openModal, data?.id]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (videoRef != null) {
        videoRef.current?.play();
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='relative h-auto'>
      <div className='relative'>
        <video
          ref={videoRef}
          loop
          muted
          poster={data?.thumbnailUrl}
          src={data?.videoUrl}
          className='w-full h-[56.25vw] object-cover brightness-[60%]'
        ></video>
        <div className='left-vignette z-10'></div>
        <div className='bottom-vignette left-0 absolute right-0 z-10'></div>
      </div>
      <div className='absolute top-[20%] md:top-[15%] lg:top-[20%] xl:top-[30%] ml-4 md:ml-16 z-10'>
        <p className='text-white text-xl md:text-5xl h-full w-full lg:w-[80%] xl:w-[50%] lg:text-6xl font-bold drop-shadow-xl'>
          {data?.title}
        </p>
        <p className='text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-full lg:w-[80%] xl:w-[50%] drop-shadow-xl'>
          {data?.description}
        </p>
        <div className='flex flex-row items-center mt-3 md:mt-4 gap-3'>
          <PlayButton movieId={data?.id} />
          <button
            onClick={handleOpenModal}
            className='bg-[rgba(109,109,110,0.7)] text-white rounded-[4px] py-1 md:py-[6px] px-2 md:px-4 lg:px-6 w-auto text-xs md:text-base lg:text-xl font-bold flex flex-row items-center hover:bg-[rgba(109,109,110,0.4)] transition'
          >
            <AiOutlineInfoCircle className='mr-1 md:mr-3 text-lg md:text-2xl lg:text-4xl' />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
