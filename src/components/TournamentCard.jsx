import "./TournamentCard.css";

const TournamentCard = ({ tournament }) => {
  return (
    <div className="tournament-card">
      <h3>{tournament.name}</h3>
      <p>Game: {tournament.game}</p>
      <p>Entry Fee: ${tournament.entryFee}</p>
      <p>Prize Pool: ${tournament.prizePool}</p>
      <p>Start Time: {tournament.startTime}</p>
      <button className="join">Join Tournament</button>
    </div>
  );
};

export default TournamentCard;
