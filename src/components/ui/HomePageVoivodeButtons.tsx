import { useFetchLeagues } from "../../customHooks/fetchLeagueData/useFetchLeagues";

export const HomePageVoivodeButtons: React.FC<{ handleSelectDefaultVoivode: (id: string) => void }> = ({
  handleSelectDefaultVoivode,
}) => {
  const { isPending, error, data } = useFetchLeagues();

  if (isPending) return <p>Loading...</p>;
  if (error) return <p>An error has occurred {error.message}</p>;

  return (
    <div className="flex flex-col items-center gap-5 py-5">
      <p className="text-center">Wybierz wojewodztwo</p>
      <div className="grid grid-cols-3 gap-2">
        {data?.map((voivode) => (
          <button
            key={voivode.id}
            onClick={() => handleSelectDefaultVoivode(voivode.id)}
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
