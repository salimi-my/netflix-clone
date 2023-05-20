import React from 'react';
import { isEmpty } from 'lodash';
import MovieCard from './MovieCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

interface MovieListProps {
  data: Record<string, any>[];
  title: string;
  common?: boolean;
}

const MovieList: React.FC<MovieListProps> = ({ data, title, common }) => {
  if (isEmpty(data)) {
    return null;
  }

  console.log(typeof data);

  return (
    // <div className='px-4 md:px-12 mt-4 space-y-8'>
    //   <div>
    //     <p className='text-white text-md md:text-xl lg:text-2xl font-semibold mb-4'>
    //       {title}
    //     </p>
    //     <div className='grid grid-cols-4 gap-2'>
    //       {data.map((movie) => (
    //         <MovieCard key={movie.id} data={movie} />
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <div
      className={`w-full pl-4 md:pl-16 relative ${
        common ? 'lg:-mt-5 xl:-mt-10 2xl:-mt-20' : 'mt-[1vw]'
      }`}
    >
      <div>
        <p className='text-white text-md md:text-xl lg:text-2xl font-semibold'>
          {title}
        </p>
        <Swiper
          modules={[Navigation]}
          spaceBetween={8}
          loop={data.length > 12}
          // loopedSlides={6}
          slidesPerView={2}
          // slidesPerGroup={2}
          breakpoints={{
            768: {
              slidesPerView: 3
              // slidesPerGroup: 3
            },
            1024: {
              slidesPerView: 4
              // slidesPerGroup: 4
            },
            1440: {
              slidesPerView: 6
              // slidesPerGroup: 6
            }
          }}
          navigation={true}
          cssMode={true}
          allowTouchMove={false}
          className='w-full -mt-5 lg:-mt-10 xl:-mt-20 2xl:-mt-28'
          // className='w-full'
        >
          {data
            .sort((a, b) => Math.random() - 0.5)
            .map((movie) => (
              <SwiperSlide key={movie.id}>
                <MovieCard data={movie} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MovieList;
