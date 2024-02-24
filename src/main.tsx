import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { TeamProfile } from "./pages/TeamProfile";
import { HomePage } from "./pages/HomePage";
import { TeamsGroup } from "./pages/TeamsGroup";
import { GameDetails } from "./pages/GameDetails";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

// import { FavouriteTeamContextProvider } from "./context/FavouriteTeamsContext";
import { CombinedContext } from "./context/CombinedContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    ),
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
        path: "/teams",
        element: <TeamsGroup />,
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
    <CombinedContext>
      <RouterProvider router={router} />
    </CombinedContext>
  </React.StrictMode>
);
