import { ThemeProvider } from "next-themes";
import React from "react";
import { RouterProvider } from "react-router-dom";
import "swiper/swiper-bundle.css";
import { Loader } from "./components/common/loading";
import router from "./router/router";

function App() {
  return (
    <ThemeProvider attribute="class" disableTransitionOnChange>
      <React.Suspense fallback={<Loader />}>
        <RouterProvider router={router} />
      </React.Suspense>
    </ThemeProvider>
  );
}

export default App;
