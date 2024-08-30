import { FavouriteTeamContextProvider } from "./FavouriteTeamsContext";
import { FavouriteLeaguesContextProvider } from "./FavouriteLeaguesContext";
import { BlogContextProvider } from "./BlogContext";
import { DefaultVoivodeContextProvider } from "./DefaultVoivodeContext";

export const CombinedContext: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <>
      <DefaultVoivodeContextProvider>
        <BlogContextProvider>
          <FavouriteTeamContextProvider>
            <FavouriteLeaguesContextProvider>{children}</FavouriteLeaguesContextProvider>
          </FavouriteTeamContextProvider>
        </BlogContextProvider>
      </DefaultVoivodeContextProvider>
    </>
  );
};
