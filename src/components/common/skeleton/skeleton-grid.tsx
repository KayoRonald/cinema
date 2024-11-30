import { FC, memo } from "react";
import { css } from "styled-system/css";
import { center } from "styled-system/patterns";
import { useMediaQuery } from "usehooks-ts";
import { Skeleton } from "~/components/ui/skeleton";

interface SkelatonLoaderProps {
  className?: string;
  isMoviesSliderLoader?: boolean;
}

export const SkelatonGrid: FC<SkelatonLoaderProps> = memo(() => {
  const isScreenSmall = useMediaQuery("(max-width: 380px)");

  return (
    <>
      {Array.from({ length: 20 }).map((_item, index) => {
        return (
          <div
            key={index}
            className={css({
              mb: 3,
            })}
          >
            <Skeleton height={isScreenSmall ? 216 : 250} width={170} />
            <div
              className={css({
                mt: 3,
                textAlign: "center",
              })}
            >
              <Skeleton height="5" width="80%" />
            </div>
          </div>
        );
      })}
    </>
  );
});
