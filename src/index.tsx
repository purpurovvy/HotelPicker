import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter } from "react-router-dom";
import { theme } from "./theme";
import { ThemeProvider } from "@mui/material";
import ErrorBoundary from "./components/commons/ErrorBoundary";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <QueryClientProvider client={queryClient}>
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <App />
        </HashRouter>
      </ThemeProvider>
    </ErrorBoundary>
  </QueryClientProvider>
);
