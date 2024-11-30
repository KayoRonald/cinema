import { FC, useState, memo } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { css } from "styled-system/css";
import { Box, Stack, styled } from "styled-system/jsx";
import { IMovie } from "~/types";
import { Text } from "../ui/text";
import { Tooltip } from "../ui/tooltip";
import { LucideImage } from "lucide-react";

interface MovieSlidesProps {
  movie: IMovie;
  category: string;
  index?: number;
  type?: string;
}

const Image = styled(LazyLoadImage, {
  base: {
    objectFit: "cover",
    aspectRatio: "3/4",
    rounded: { base: "md", md: "xl" },
  },
});

const TopMovie = styled("div", {
  base: {
    position: "absolute",
    fontSize: "[100px]",
    fontWeight: "bold",
    color: "zinc.950",
    WebkitTextStroke: "0.25rem rgb(255, 255, 255)",
    bottom: 0,
    left: 2,
    lineHeight: "none",
    textShadow: "lg",
  },
});

const TooltipWrapper: FC<
  { title: string; children: React.ReactNode } & Tooltip.RootProps
> = memo(({ title, children, ...props }) => (
  <Tooltip.Root {...props}>
    <Tooltip.Trigger>{children}</Tooltip.Trigger>
    <Tooltip.Positioner>
      <Tooltip.Arrow>
        <Tooltip.ArrowTip />
      </Tooltip.Arrow>
      <Tooltip.Content>{title}</Tooltip.Content>
    </Tooltip.Positioner>
  </Tooltip.Root>
));

export const SwipperSlider: FC<MovieSlidesProps> = ({
  movie,
  category,
  index,
  type,
}) => {
  const { poster_path, original_title: title, name, id } = movie;
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const onLoad = () => {
    setIsImageLoaded(true);
  };
  return (
    <Link
      to={`/details/${category}/${id}`}
      className={css({
        bg: "gray.100",
        rounded: "lg",
        overflow: "hidden",
        position: "relative",
        w: "170px",
        h: {
          base: "216px",
          md: "250px",
        },
      })}
    >
      <Stack>
        <Box
          pos={"relative"}
          overflow={"hidden"}
          transition={"transform 200ms"}
          _hover={{ transform: "scale(1.05)" }}
        >
          <TopMovie hidden={type !== "popular"}>{Number(index) + 1}</TopMovie>
          {poster_path ? (
            <Image
              src={`https://image.tmdb.org/t/p/original/${poster_path}`}
              alt={movie.original_title}
              onLoad={onLoad}
              height={250}
              width={170}
              bg={isImageLoaded ? "none" : "gray.800"}
              animation={isImageLoaded ? "none" : "shine"}
            />
          ) : (
            // Fallback
            <Box
              justifyContent={"center"}
              bg={"gray.800"}
              height={250}
              display={"flex"}
              alignItems={"center"}
              animation={"skeleton-pulse"}
            >
              <LucideImage size={24} />
            </Box>
          )}
        </Box>
        <Stack gap={1}>
          <TooltipWrapper title={title} aria-label={title}>
            <Text truncate>
              {" "}
              {(title?.length > 50 ? title.split(":")[0] : title) || name}
            </Text>
          </TooltipWrapper>
        </Stack>
      </Stack>
    </Link>
  );
};
