import { useEffect, useState } from "react";
import { VoivodeChildLeagues } from "../components/ui/VoivodeChildLeagues";
import { useFetchLeagues } from "../customHooks/fetchLeagueData/useFetchLeagues";
import PageTitle from "../components/generic/PageTitle";

export const HomePage: React.FC = () => {
  const [defualtVoivodeId, setDefaultVoivodeId] = useState("");

  const { isPending, error, data } = useFetchLeagues();

  const handleSelectDefaultVoivode = (id: string) => {
    localStorage.setItem("defaultVoivode", JSON.stringify(id));
    setDefaultVoivodeId(id);
  };

  useEffect(() => {
    const defaultVoivode: string | null = localStorage.getItem("defaultVoivode");

    if (!defaultVoivode) return;

    const parsedDefaultVoivode = JSON.parse(defaultVoivode);

    setDefaultVoivodeId(parsedDefaultVoivode);
  }, [setDefaultVoivodeId]);

  if (isPending) return <p>Loading...</p>;
  if (error) return <p>An error has occurred {error.message}</p>;

  return (
    <>
      <PageTitle title="HotScore" />
      {defualtVoivodeId ? (
        <VoivodeChildLeagues defualtVoivodeId={defualtVoivodeId} />
      ) : (
        <div className="flex flex-col items-center gap-5 py-5">
          <p className="text-center">Wybierz wojewodztwo</p>
          <div className="grid grid-cols-3 gap-2">
            {data?.map((voivode) => (
              <button
                key={voivode.id}
                onClick={() => handleSelectDefaultVoivode(voivode.id)}
                className="text-xs p-2 border rounded-md hover:bg-zinc-100 transition-colors dark:border-zinc-700 dark:hover:bg-zinc-800"
              >
                {voivode.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
