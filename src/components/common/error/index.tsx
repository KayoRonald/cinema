import { BiError } from "react-icons/bi";
import { css, cx } from "styled-system/css";
import { flex } from "styled-system/patterns";

interface ErrorProps {
  className?: string | undefined;
  error: string;
}

const Error = ({ className = "h-screen", error }: ErrorProps) => {
  return (
    <div
      className={cx(
        css({
          position: "relative",
          top: 0,
          left: 0,
          w: "100%",
          h: "100vh",
          flex: "justify-center",
          alignItems: "center",
        }),
        className
      )}
    >
      <div
        className={flex({
          flexDirection: "column",
          align: "center",
          justify: "center",
        })}
      >
        <BiError
          className={css({
            fontSize: "[32px]",
            color: "[#ff0000]",
          })}
        />
        <p
          className={css({
            fontSize: "[18px]",
            color: "[#ff0000]",
            mt: 4,
            textAlign: "center",
          })}
        >
          {error}
        </p>
      </div>
    </div>
  );
};

export default Error;
