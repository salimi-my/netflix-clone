import useSWR from 'swr';
import fetcher from '../lib/fetcher';

const useFavourites = () => {
  const { data, error, isLoading, mutate } = useSWR('/api/favorites', fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });

  return { data, error, isLoading, mutate };
};

export default useFavourites;
