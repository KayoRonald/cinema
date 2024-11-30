import { FC, memo } from "react";
import { Link } from "react-router-dom";
import { css } from "styled-system/css";
import { Box, styled } from "styled-system/jsx";
import { Heading } from "~/components/ui/heading";
import { getMovies } from "~/service/tmdb";
import { IMovie } from "~/types";
import MoviesSlides from "./movies-slides";
import { SkelatonLoader } from "../common/skeleton";

export const Line = styled("div", {
  base: {
    width: "[70%]",
    height: "[2.75px]",
    backgroundColor: "purple.400",
    borderRadius: "[20px]",
    position: "absolute",
    bottom: "[-4px]",
  },
});

export const WrapperTitle = styled("div", {
  base: {
    display: "flex",
    flexDir: "row",
    mb: "[22.73px]",
    justifyContent: "space-between",
  },
});

interface SectionProps {
  title: string;
  category: string;
  className?: string;
  type?: string;
  id?: number;
  showSimilarShows?: boolean;
}

export const Movie: FC<SectionProps> = memo(({
  title,
  category,
  type,
  id,
  className,
  showSimilarShows,
}) => {
  const { data, error, isLoading } = getMovies.useAll({
    category,
    type,
    page: 1,
    id,
    showSimilarShows,
  });

  return (
    <Box className={className} px={{base: "[16.75px]", md: '[5px]'}} py={6}>
      <WrapperTitle>
        <div className={css({ position: "relative", display: "inline-block" })}>
          <Heading
            as={"h3"}
            fontSize={{
              sm: "[22.25px]",
              base: "[18.75px]",
              md: "[20px]",
            }}
          >
            {title}
          </Heading>
          <Line />
        </div>
        {!showSimilarShows && (
          <Link to={`/catalog/${category}?type=${type}`}>View all</Link>
        )}
      </WrapperTitle>

      <div
        className={css({
          height: {
            sm: "[312px]",
            base: "[266px]",
            md: "[309px]",
          },
        })}
      >
        {isLoading ? (
          <SkelatonLoader />
        ) : error ? (
          <Box>Error</Box>
        ) : (
          <MoviesSlides
            movies={data?.data.results.slice(0, 10) as IMovie[]}
            category={category}
          />
        )}
      </div>
    </Box>
  );
});
