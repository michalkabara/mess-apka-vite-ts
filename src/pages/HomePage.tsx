import { SingleLeague } from "../components/SingleLeague";

const leagues = [
  {
    leagueName: "Okręgowa",
    subLeagues: [
      "Kraków I",
      "Kraków II",
      "Kraków III",
      "Nowy Sącz I",
      "Nowy Sącz II",
      "Tarnów I",
      "Tarnów II",
      "Wadowice",
    ],
  },
];

export const HomePage = () => {
  return (
    <>
      {leagues.map((league) =>
        league.subLeagues.map((subleague, index) => (
          <SingleLeague key={subleague} subLeague={subleague} index={index} />
        ))
      )}
    </>
  );
};
