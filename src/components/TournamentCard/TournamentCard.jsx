import "./TournamentCard.css";

const TournamentCard = ({ tournament, onJoin }) => {
  return (
    <div className="tournament-card">
      <h3>{tournament.name}</h3>
      <p>Game: {tournament.game}</p>
      <p>Entry Fee: ${tournament.entryFee}</p>
      <p>Prize Pool: ${tournament.prizePool}</p>
      <p>Start Time: {tournament.startTime}</p>
      {onJoin && (
        <button className="join" onClick={() => onJoin(tournament)}>
          Join Tournament
        </button>
      )}
    </div>
  );
};

export default TournamentCard;
