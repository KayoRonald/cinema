import { memo } from "react";
import { css } from "styled-system/css";


export const Loader = memo(() => {
  return (
    <div 
    className={
      css({
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "black",
      })
    }
    >
      <div className="loader" />
    </div>
  );
});
