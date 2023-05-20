import React, { useCallback, useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import PlayButton from './PlayButton';
import FavouriteButton from './FavouriteButton';
import useInfoModal from '../hooks/useInfoModal';
import useMovie from '../hooks/useMovie';

interface InfoModalProps {
  visible?: boolean;
  onClose: any;
}

const InfoModal: React.FC<InfoModalProps> = ({ visible, onClose }) => {
  const [isVisible, setIsVisible] = useState<boolean>(!!visible);

  const { movieId } = useInfoModal();
  const { data = {} } = useMovie(movieId);

  useEffect(() => {
    setIsVisible(!!visible);
  }, [visible]);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose]);

  if (!visible) {
    return null;
  }

  return (
    <div className='z-50 transition duration-300 bg-black bg-opacity-80 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0'>
      <div className='relative w-auto mx-2 md:mx-4 max-w-3xl rounded-md overflow-hidden'>
        <div
          className={`${
            isVisible ? 'scale-100' : 'scale-0'
          } transform duration-300 relative flex-auto bg-dark-netfuix drop-shadow-md`}
        >
          <div className='relative h-64 md:h-96'>
            <video
              poster={data?.thumbnailUrl}
              autoPlay
              muted
              loop
              src={data?.videoUrl}
              className='w-full brightness-[60%] object-cover h-full'
            />
            <div
              onClick={handleClose}
              className='cursor-pointer absolute top-3 right-3 h-10 w-10 rounded-full bg-black bg-opacity-70 flex items-center justify-center'
            >
              <AiOutlineClose className='text-white font-bold text-2xl' />
            </div>
            <div className='absolute bottom-[10%] left-5 md:left-10'>
              <p className='text-white text-3xl md:text-4xl h-full lg:text-5xl font-bold mb-8'>
                {data?.title}
              </p>
              <div className='flex flex-row gap-2 md:gap-4 items-center'>
                <PlayButton movieId={data?.id} isModal={true} />
                <FavouriteButton movieId={data?.id} isModal={true} />
              </div>
            </div>
          </div>

          <div className='px-5 md:px-10 py-12'>
            <div className='flex flex-row gap-2 items-center text-lg'>
              <p className='text-green-400 font-semibold'>New</p>
              <div className='border border-gray-500 text-white leading-none px-[3px] py-[1px]'>
                13+
              </div>
              <p className='text-white font-semibold'>{data?.duration}</p>
              <div className='border border-gray-500 text-white leading-none text-xs px-[3px] py-[1px]'>
                HD
              </div>
            </div>
            <div className='flex flex-row items-center gap-2 mt-5 text-lg text-white'>
              <div className='flex items-center font-semibold'>
                {data?.genre?.map((genre: any, index: any, genres: any) => {
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
            <p className='text-white text-lg mt-5'>{data?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
