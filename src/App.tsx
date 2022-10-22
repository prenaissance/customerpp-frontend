import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ThemeWrapper from "@common/theme/ThemeWrapper";
import Layout from "./layout/Layout";

const queryClient = new QueryClient();

const App: FC = () => {
  return (
    <ThemeWrapper>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeWrapper>
  );
};

export default App;
