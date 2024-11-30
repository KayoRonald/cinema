import { css } from "styled-system/css";
import { Box, Container, VStack, styled } from "styled-system/jsx";
import { SkelatonLoader } from "~/components/common/skeleton";
import { Faqs } from "~/components/home/faqs";
import { Hero } from "~/components/home/hero";
import { Newsletter } from "~/components/home/newsletter";
import { Line, WrapperTitle } from "~/components/movie";
import MoviesSlides from "~/components/movie/movies-slides";
import { Pattern } from "~/components/pattern";
import { Heading } from "~/components/ui/heading";
import { Footer } from "~/layout/footer";
import { getMovies } from "~/service/tmdb";
import { IMovie } from "~/types";

export default function Home() {
  const {
    data: popular,
    error,
    isLoading,
    mutate,
  } = getMovies.useAll({
    category: "movie",
    type: "popular",
    page: 1,
  });

  if (error) {
    return <div>error</div>;
  }

  return (
    <>
      <Pattern variant="checkered" />
      <Hero />
      <Box py={4} px={5} maxW={"8xl"} mx={"auto"}>
        <WrapperTitle>
          <div
            className={css({ position: "relative", display: "inline-block" })}
          >
            <Heading
              as={"h2"}
              fontSize={{
                sm: "[22.25px]",
                base: "[18.75px]",
                md: "[20px]",
              }}
            >
              Top movies
            </Heading>
            <Line />
          </div>
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
          ) : (
            <MoviesSlides
              category="movie"
              type="popular"
              movies={popular?.data.results as IMovie[]}
            />
          )}
        </div>
      </Box>
      <Container pt="32" pb="48">
        <VStack gap="20">
          <styled.h2 textStyle={"5xl"} fontWeight="bold" textAlign="center">
            Works Everywhere. <br />
            Including Server Components.
          </styled.h2>
        </VStack>
      </Container>
      {/* Newsletter */}
      <Newsletter />
      {/* fag */}
      <Faqs />
      {/* footer */}
      <Footer />
    </>
  );
}
