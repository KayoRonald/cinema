import { FC, memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { styled } from "styled-system/jsx";
import { sliderSettings } from "~/config/swiper-config";
import { IMovie } from "~/types";
import { SwipperSlider } from "../swiper";

interface MoviesSlidesProps {
  movies: IMovie[];
  category: string;
  type?: string;
}

const WrapperSwiper = styled(SwiperSlide, {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: {
      base: "2",
      sm: "[14px]",
    },
    maxWidth: "[170px]",
    rounded: "lg",
  },
});

const MoviesSlides: FC<MoviesSlidesProps> = ({ movies, category, type }) => (
  <Swiper {...sliderSettings} spaceBetween={15}>
    {movies.map((movie, index) => {
      return (
        <WrapperSwiper key={movie.id}>
          <SwipperSlider
            index={index}
            type={type}
            movie={movie}
            category={category}
          />
        </WrapperSwiper>
      );
    })}
  </Swiper>
);

export default MoviesSlides;
