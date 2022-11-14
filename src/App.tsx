import { FC } from "react";
import { createRoutesFromElements, createRoutesFromChildren } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ThemeWrapper from "@common/theme/ThemeWrapper";
import Layout from "./layout/Layout";
import Router from "./routes/Router";

const queryClient = new QueryClient();

const App: FC = () => {
  return (
    <ThemeWrapper>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </ThemeWrapper>
  );
};

export default App;
