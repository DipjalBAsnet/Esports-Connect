import { useState } from "react";
import GameModeSelector from "../components/GameModeSelector/GameModeSelector";
import CreateChallengeForm from "../components/CreateChallengeForm/CreateChallengeForm";
import TournamentCard from "../components/TournamentCard/TournamentCard";
import { tournaments } from "../../data/tournament";
import "./Tournaments.css";

const Tournaments = () => {
  const [selectedGame, setSelectedGame] = useState("FreeFire");
  const [selectedMode, setSelectedMode] = useState("Fullmap");
  const [showForm, setShowForm] = useState(false);

  const handleJoinTournament = (tournament) => {
    alert(`Payment of $${tournament.entryFee} successful!`);
  };

  return (
    <div className="tournaments">
      <h1>Tournaments</h1>
      <GameModeSelector
        selectedGame={selectedGame}
        selectedMode={selectedMode}
        onGameChange={setSelectedGame}
        onModeChange={setSelectedMode}
        showCreateButton={
          selectedGame === "FreeFire" && selectedMode === "Clash Squad"
        }
        onCreateClick={() => setShowForm(true)}
      />
      <CreateChallengeForm show={showForm} onClose={() => setShowForm(false)} />
      <div className="tournaments-grid">
        {tournaments
          .filter((tournament) =>
            selectedGame === "FreeFire"
              ? tournament.game === "FreeFire" &&
                tournament.mode === selectedMode
              : tournament.game === "PUBG"
          )
          .map((tournament) => (
            <TournamentCard
              key={tournament.id}
              tournament={tournament}
              onJoin={handleJoinTournament}
            />
          ))}
      </div>
    </div>
  );
};

export default Tournaments;
