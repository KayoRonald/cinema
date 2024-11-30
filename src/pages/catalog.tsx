import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { css } from "styled-system/css";
import { Container, styled } from "styled-system/jsx";
import { grid } from "styled-system/patterns";
import { SkelatonGrid } from "~/components/common/skeleton/skeleton-grid";
import { SwipperSlider } from "~/components/swiper";
import { Heading } from "~/components/ui/heading";
import { Pagination } from "~/components/ui/pagination";
import { getMovies } from "~/service/tmdb";
import { IMovie } from "~/types";

const Box = styled("div", {
  base: {
    p: 10,
    mt: { base: 27, md: 24 },
    rounded: "base",
    px: { base: "4", md: "8", lg: "12" },
    py: { base: "6", md: "8", lg: "12" },
    bg: "gray.700",
    mb: { base: "6", md: "5" },
  },
});

const Catalog: React.FC = () => {
  const { category } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const type = searchParams.get("type") || "popular";
  const initialPage = parseInt(searchParams.get("page") || "1", 10);

  const [page, setPage] = useState(initialPage);

  useEffect(() => {
    const currentType = type;
    const currentPage = searchParams.get("page") || "1";

    const pageNumber = isNaN(page) ? 1 : page;

    if (
      currentPage !== pageNumber.toString() ||
      searchParams.get("type") !== currentType
    ) {
      setSearchParams({ type: currentType, page: pageNumber.toString() });
    }
  }, [page, setSearchParams]);

  const { data, isLoading, error } = getMovies.useAll({
    category,
    type,
    page,
  });

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
        <button onClick={() => window.location.reload()}>Reload</button>
      </div>
    );
  }

  return (
    <Container>
      <Box>
        <Box textAlign={"center"} mb={5}>
          <Heading as="h1" size="lg">
            Find the perfect manga for you
          </Heading>
        </Box>
      </Box>
      <div
        className={grid({
          columns: [2, 4, 6],
          columnGap: { base: "2", md: "3" },
          rowGap: { base: "8", md: "10" },
          px: "3",
          placeItems: "center",
        })}
      >
        {isLoading ? (
          <SkelatonGrid />
        ) : (
          data?.data.results.map((movie: IMovie) => (
            <SwipperSlider
              key={movie.id}
              movie={movie}
              category={String(category)}
            />
          ))
        )}
      </div>

      {/* Pagination */}
      <Pagination
        onPageChange={(e) => setPage(e.page)}
        page={page}
        count={Number(data?.total_pages)}
        pageSize={20}
        siblingCount={1}
        defaultPage={1}
        className={css({
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "full",
          maxW: "full",
          mx: "auto",
          px: "4",
          py: "4",
        })}
      />
    </Container>
  );
};

export default Catalog;
