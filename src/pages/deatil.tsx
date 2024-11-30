import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { LucideImage } from "lucide-react";
import { useParams } from "react-router-dom";
import { css } from "styled-system/css";
import { Container, styled } from "styled-system/jsx";
import { flex, wrap } from "styled-system/patterns";
import { Loader } from "~/components/common/loading";
import { Movie } from "~/components/movie";
import { Badge } from "~/components/ui/badge";
import { Heading } from "~/components/ui/heading";
import { Span } from "~/components/ui/span";
import { Text } from "~/components/ui/text";
import { getMovies } from "~/service/tmdb";
import { tmdbImage } from "~/utils/tmdb-image";

const WrapperBanner = styled("div", {
  base: {
    width: "full",
    height: {
      base: "[40dvh]",
      lg: "[60dvh]",
    },
    overflow: "hidden",
    position: "relative",
    rounded: "md",
  },
});

const Detail: React.FC = () => {
  const { category, id } = useParams();

  const {
    data: movie,
    error,
    isLoading,
    mutate,
  } = getMovies.useOne(String(category), Number(id));

  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <div>Something went wrong</div>;
  }
  const backdropURL = tmdbImage(movie?.data.backdrop_path);

  return (
    <div>
      <Container maxW={"6xl"} pos={"relative"} mx={"auto"}>
        <WrapperBanner>
          <div
            style={{
              backgroundImage: `url(${backdropURL})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className={css({
              width: "full",
              height: "full",
              position: "absolute",
              top: "0",
              left: "0",
              zIndex: "[-10]",
            })}
            data-testid="banner"
          />
          <div
            className={css({
              position: "absolute",
              width: "full",
              height: "full",
              top: "0",
              left: "0",
              background:
                "linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1))",
              zIndex: "[-9]",
            })}
          />
        </WrapperBanner>
      </Container>

      <div
        className={css({
          my: "8",
        })}
      >
        <section
          className={css({
            mx: "auto",
            maxW: "4xl",
            my: "8",
            gap: "8",
            mt: "6",
            px: "8",
          })}
        >
          <div
            className={css({
              display: "flex",
              flexDirection: "row",
              gap: "4",
              alignItems: {
                sm: "flex-start",
                md: "end",
              },
            })}
          >
            <aside
              className={css({
                width: {
                  base: "2/5",
                  md: "1/3",
                },
                mt: "-32",
              })}
            >
              <figure
                className={css({
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  aspectRatio: "2/3",
                  overflow: "hidden",
                  borderRadius: "lg",
                  border: "1px solid",
                  borderColor: "gray.300",
                  bg: "gray.600",
                  color: "gray.300",
                  boxShadow: "sm",
                  margin: "auto",
                })}
              >
                {movie?.data.poster_path ? (
                  <img
                    src={tmdbImage(movie?.data.poster_path)}
                    alt={movie?.data.title}
                    className={css({
                      width: "full",
                      height: "full",
                      objectFit: "cover",
                    })}
                  />
                ) : (
                  <LucideImage size={24} />
                )}
              </figure>
            </aside>

            <article
              className={flex({
                direction: "column",
                gap: "4",
                width: {
                  base: "3/5",
                  md: "2/3",
                },
              })}
            >
              {movie?.data.release_date && (
                <Span color={"zinc.400"}>
                  {format(new Date(movie?.data.release_date), "PPP", {
                    locale: ptBR,
                  })}
                </Span>
              )}

              <Heading
                size={{
                  base: "2xl",
                  md: "4xl",
                }}
                className={css({
                  fontWeight: "bold",
                  mb: "2",
                })}
              >
                {movie?.data.title}
              </Heading>

              <div
                className={wrap({
                  overflow: "hidden",
                  align: "center",
                  gap: "2",
                  whiteSpace: "nowrap",
                  display: {
                    base: "none",
                    md: "flex",
                  },
                })}
              >
                {movie?.data.genres.map((genre) => (
                  <Badge key={genre.id}>{genre.name}</Badge>
                ))}
              </div>
              <Text
                fontSize="sm"
                display={{
                  base: "none",
                  md: "block",
                }}
              >
                {movie?.data.overview}
              </Text>
            </article>
          </div>
          <div
            className={css({
              display: {
                md: "none",
                base: "inline-block",
              },
              gap: "4",
            })}
          >
            a<Text size={"md"}>{movie?.data.overview}</Text>
            <div
              className={flex({
                display: "flex",
                gap: "2",
                flexWrap: "wrap",
              })}
            >
              {movie?.data.genres.map((genre) => (
                <Badge key={genre.id}>{genre.name}</Badge>
              ))}
              {/* <MovieGenres genres={movie.genres} /> */}
              {/* {votes} */}
            </div>
          </div>
        </section>
      </div>

      <Movie
        title={`Similar ${category === "movie" ? "movies" : "series"}`}
        category={String(category)}
        className={css({
          maxW: "[1140px]",
          mx: "auto",
          px: {
            md: "8",
            base: "4",
            xl: "0",
            sm: "6",
          },
        })}
        id={Number(id)}
        showSimilarShows
      />
    </div>
  );
};

export default Detail;
