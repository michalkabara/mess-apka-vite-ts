import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { CombinedContext } from "./context/CombinedContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { router } from "./router";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <CombinedContext>
        <RouterProvider router={router} />
      </CombinedContext>
    </QueryClientProvider>
  </StrictMode>
);
