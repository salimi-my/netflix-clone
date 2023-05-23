import React from 'react';
import { FiVolume2, FiVolumeX } from 'react-icons/fi';

interface VolumeButtonProps {
  isMute: boolean;
  handleMuteVideo: any;
}

const VolumeButton: React.FC<VolumeButtonProps> = ({
  isMute,
  handleMuteVideo
}) => {
  return (
    <div
      onClick={handleMuteVideo}
      className='cursor-pointer group/item bg-[rgba(42,42,42,.6)] border-[hsla(0,0%,100%,.5)] rounded-full flex justify-center items-center transition hover:border-white border-[0.12rem] w-6 h-6 md:w-[30px] md:h-[30px] lg:w-9 lg:h-9 xl:w-10 xl:h-10'
    >
      {isMute && <FiVolumeX size={18} className='text-white' />}
      {!isMute && <FiVolume2 size={18} className='text-white' />}
    </div>
  );
};

export default VolumeButton;
