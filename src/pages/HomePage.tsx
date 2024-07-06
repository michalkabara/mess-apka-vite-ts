import { HomePageBlog } from "../components/generic/HomePageBlog";
import { VoivodeChildLeagues } from "../components/ui/VoivodeChildLeagues";

export const HomePage: React.FC = () => {
  return (
    <>
      <div className="max-md:hidden">
        <HomePageBlog></HomePageBlog>
      </div>

      <hr className="mt-4 border-zinc-700"></hr>
      <VoivodeChildLeagues />
    </>
  );
};
