import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import { TeamProfile } from "./pages/TeamProfile";
import { HomePage } from "./pages/HomePage";
import { LeagueProfile } from "./pages/LeagueProfile";
import { GameDetails } from "./pages/GameDetails";
import { BlogPost } from "./components/ui/BlogPost";
import { VoivodeshipProfile } from "./pages/VoivodeshipProfile";
import { PlayerProfile } from "./pages/PlayerProfile";
import { Login } from "./pages/Login";
import { Blog } from "./pages/Blog";

export const router = createBrowserRouter([
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
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/player/:playerId",
        element: <PlayerProfile />,
      },
      {
        path: "/voivode/:voivodeId",
        element: <VoivodeshipProfile />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/post/:postId",
        element: <BlogPost />,
      },
    ],
  },
]);
