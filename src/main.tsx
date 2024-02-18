import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { TeamProfile } from "./pages/TeamProfile";
import { GamesResults } from "./pages/GamesResults";
import { TeamsGroup } from "./pages/TeamsGroup";
import { GameDetails } from "./pages/GameDetails";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

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
        element: <GamesResults />,
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
    <RouterProvider router={router} />
  </React.StrictMode>
);
