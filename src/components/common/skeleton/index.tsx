import { FC, memo } from "react";
import { css, cx } from "styled-system/css";
import { center } from "styled-system/patterns";
import { useMediaQuery } from "usehooks-ts";
import { Skeleton } from "~/components/ui/skeleton";

interface SkelatonLoaderProps {
  className?: string;
  isMoviesSliderLoader?: boolean;
}

export const SkelatonLoader: FC<SkelatonLoaderProps> = memo(
  ({ className, isMoviesSliderLoader = true }) => {
    const isScreenSmall = useMediaQuery("(max-width: 380px)");

    const classNames = cx(
      isMoviesSliderLoader
        ? css({
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "[15px]",
            overflow: "hidden",
          })
        : css({
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: {
              base: "2",
              sm: "[14px]",
            },
          }),
      className
    );

    const arrSize = isMoviesSliderLoader
      ? Math.floor(window.innerWidth / 170) + 1
      : 10;

    return (
      <>
        <div className={classNames}>
          {Array.from({ length: arrSize }).map((_item, index) => {
            return (
              <div
                key={index}
                className={css({
                  mb: 8,
                })}
              >
                <Skeleton height={isScreenSmall ? 216 : 250} width={170} />
                <div className={css({
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                  mx: "auto",
                  mb: 2,
                })}>
                  <Skeleton height="5" width="80%" />
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
);
