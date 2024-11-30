import { css } from "styled-system/css";
import { Container, Stack, styled } from "styled-system/jsx";
import { Button } from "../ui/button";
import { Heading } from "../ui/heading";

export const Brush = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 418 42"
    className={css({
      position: "absolute",
      right: 30,
      top: "66.666667%",
      height: "0.68em",
      width: "70%",
      fill: "purple.500",
      zIndex: -1,
    })}
    preserveAspectRatio="none"
  >
    <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
  </svg>
);

export function Hero() {
  return (
    <>
      <Container
        colorPalette={"colors.bg"}
        pt={{ base: "16", md: "32" }}
        pb="8"
        textAlign="center"
        minH="100vh"
      >
        <Stack pt={{ base: 27, md: 24 }} gap={6} direction={"column"}>
          <Heading
            fontSize={{ base: "4xl", sm: "5xl", md: "5xl" }}
            fontWeight="medium"
          >
            Unlock the Universe’s{" "}
            <span
              className={css({
                position: "relative",
                fontWeight: "bold",
              })}
            >
              <span className={css({ position: "relative", zIndex: 10 })}>
                Hidden Frontiers
              </span>
              <Brush />
            </span>
          </Heading>

          <p
            className={css({
              mb: 8,
              fontSize: "lg",
              fontWeight: "normal",
              color: "gray.500",
              lg: { fontSize: "xl" },
              sm: { px: 16 },
              xl: { px: 48 },
              _dark: { color: "gray.400" },
            })}
          >
            At Galaxos, we venture into uncharted space, blending innovation and
            exploration to shape the future across galaxies.
          </p>
          <Stack
            justify={"center"}
            direction={{ base: "column", sm: "row" }}
            gap="3"
          >
            <Button minWidth="100px">
              Start Journey
              <svg
                className={css({ ml: 2, mr: 1, w: 5, h: 5 })}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </Button>
            <Button minWidth="100px">
              <svg
                className={css({ mr: 2, ml: 1, w: 5, h: 5 })}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
              </svg>
              Watch video
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
