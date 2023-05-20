import React, { useCallback, useMemo } from 'react';
import axios from 'axios';

import useCurrentUser from '../hooks/useCurrentUser';
import useFavourites from '../hooks/useFavourites';

import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineCheck } from 'react-icons/ai';

interface FavouriteButtonProps {
  movieId: string;
  isModal?: boolean;
}

const FavouriteButton: React.FC<FavouriteButtonProps> = ({
  movieId,
  isModal
}) => {
  const { mutate: mutateFavourites } = useFavourites();
  const { data: currentUser, mutate } = useCurrentUser();

  const isFavourite = useMemo(() => {
    const list = currentUser?.favouriteIds || [];

    return list.includes(movieId);
  }, [currentUser, movieId]);

  const toggleFavourites = useCallback(async () => {
    let response;

    if (isFavourite) {
      response = await axios.delete(`/api/favourite?movieId=${movieId}`);
    } else {
      response = await axios.post('/api/favourite', { movieId });
    }

    const updatedFavouriteIds = response?.data?.favouriteIds;

    mutate({
      ...currentUser,
      favouriteIds: updatedFavouriteIds
    });
    mutateFavourites();
  }, [movieId, isFavourite, currentUser, mutate, mutateFavourites]);

  const Icon = isFavourite ? AiOutlineCheck : AiOutlinePlus;

  return (
    <div
      onClick={toggleFavourites}
      className={`cursor-pointer group/item bg-[rgba(42,42,42,.6)] border-[hsla(0,0%,100%,.5)] rounded-full flex justify-center items-center transition hover:border-white ${
        isModal
          ? 'border-2 w-6 h-6 p-[2px] md:p-0 md:w-9 md:h-9 lg:w-9 lg:h-9'
          : 'border-[0.12rem] w-6 h-6 lg:w-7 lg:h-7'
      }`}
    >
      <Icon size={isModal ? 22 : 18} className='text-white' />
    </div>
  );
};

export default FavouriteButton;
