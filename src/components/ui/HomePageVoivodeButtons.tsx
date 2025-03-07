import { useFetchLeagues } from "../../customHooks/fetchLeagueData/useFetchLeagues";

export const HomePageVoivodeButtons: React.FC<{ handleSelectDefaultVoivode: (id: string, name: string) => void }> = ({
  handleSelectDefaultVoivode,
}) => {
  const { isPending, error, data } = useFetchLeagues();

  if (isPending) return <p>Loading...</p>;
  if (error) return <p>An error has occurred {error.message}</p>;

  console.log(data);

  return (
    <div className="flex flex-col items-center gap-5 py-5">
      <p className="text-center">Wybierz wojewodztwo</p>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-2 w-full">
        {data
          ?.filter((voivode) => voivode.name === "Małopolskie" || voivode.name === "Podkarpackie")
          .map((voivode) => (
            <button
              key={voivode.id}
              onClick={() => handleSelectDefaultVoivode(voivode.id, voivode.name)}
              className="text-xs p-2 border rounded-md hover:bg-zinc-100 transition-colors dark:border-zinc-700 dark:hover:bg-zinc-800 flex flex-row gap-2
          
          "
            >
              <img src={voivode.logoUrl} alt={voivode.name} className="size-4" /> {voivode.name}
            </button>
          ))}
      </div>
    </div>
  );
};
