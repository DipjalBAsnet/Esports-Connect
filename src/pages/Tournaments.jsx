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
  const [challenges, setChallenges] = useState([]);

  const handleJoinTournament = (tournament) => {
    alert(`Payment of $${tournament.entryFee} successful!`);
  };

  const handleChallengeCreate = (challenge) => {
    setChallenges((prev) => [...prev, challenge]);
  };

  const handleCancelChallenge = (id) => {
    if (window.confirm("Are you sure want to cancel the challenge?")) {
      setChallenges((prev) => prev.filter((challenge) => challenge.id !== id));
    }
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
      <CreateChallengeForm
        show={showForm}
        onClose={() => setShowForm(false)}
        onChallengeCreate={handleChallengeCreate}
      />
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
      {challenges.length > 0 && (
        <div className="created-challenges">
          <h2>Your Created Challenges</h2>
          <div className="challenges-grid">
            {challenges.map((challenge) => (
              <div key={challenge.id} className="challenge-card">
                <h3>{challenge.roomType} Challenge</h3>
                <p>Players: {challenge.players}</p>
                <p>Limited Ammo: {challenge.limitedAmmo}</p>
                <p>Character Skills: {challenge.characterSkills}</p>
                <p>Headshot: {challenge.headshot}</p>
                <p>Gun Attributes: {challenge.gunAttributes}</p>
                <p>Room Maker: {challenge.roomMaker}</p>
                <p>Amount: Rs {challenge.amount}</p>
                <button
                  className="cancel-challenge"
                  onClick={() => handleCancelChallenge(challenge.id)}
                >
                  Cancel
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Tournaments;
