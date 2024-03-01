import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { TeamProfile } from "./pages/TeamProfile";
import { HomePage } from "./pages/HomePage";
import { LeagueProfile } from "./pages/LeagueProfile";
import { GameDetails } from "./pages/GameDetails";
import { CombinedContext } from "./context/CombinedContext";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <p>error</p>,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/game/:gameId",
        element: <GameDetails />,
      },
      {
        path: "/league/:leagueId",
        element: <LeagueProfile />,
      },
      {
        path: "/team/:teamId",
        element: <TeamProfile />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CombinedContext>
        <RouterProvider router={router} />
      </CombinedContext>
    </QueryClientProvider>
  </React.StrictMode>
);
