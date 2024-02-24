import { FavouriteTeamContextProvider } from "./FavouriteTeamsContext";

import { FavouriteLeaguesContextProvider } from "./FavouriteLeaguesContext";

export const CombinedContext: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <>
      <FavouriteTeamContextProvider>
        <FavouriteLeaguesContextProvider>
          {children}
        </FavouriteLeaguesContextProvider>
      </FavouriteTeamContextProvider>
    </>
  );
};
