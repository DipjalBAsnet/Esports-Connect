import TournamentCard from "../components/TournamentCard/TournamentCard";
import "./Home.css";

const Home = () => {
  const featuredTournaments = [
    {
      id: 1,
      name: "FreeFire Weekly Cup",
      game: "FreeFire",
      mode: "Fullmap",
      entryFee: 10,
      prizePool: 500,
      startTime: "2023-10-15 18:00",
    },
    {
      id: 2,
      name: "PUBG Solo Challenge",
      game: "PUBG",
      mode: "",
      entryFee: 5,
      prizePool: 300,
      startTime: "2023-10-16 20:00",
    },
  ];

  return (
    <div className="home">
      <h1>Welcome to Esports Connect</h1>
      <p>Join FreeFire and PUBG tournaments and win money!</p>
      <div className="tournaments-grid">
        {featuredTournaments.map((tournament) => (
          <TournamentCard key={tournament.id} tournament={tournament} />
        ))}
      </div>
    </div>
  );
};

export default Home;
