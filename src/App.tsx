import React from "react";
import { Router } from "./router/Router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  return (
    <>
      <ReactQueryDevtools initialIsOpen={false} />
      <Router />
    </>
  );
}

export default App;
