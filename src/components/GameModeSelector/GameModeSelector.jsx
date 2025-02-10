import React from "react";
import "./GameModeSelector.css";

const GameModeSelector = ({
  selectedGame,
  selectedMode,
  onGameChange,
  onModeChange,
  showCreateButton,
  onCreateClick,
}) => {
  return (
    <div className="game-mode-selector">
      <div className="game-buttons">
        <button
          className={selectedGame === "FreeFire" ? "active" : ""}
          onClick={() => {
            onGameChange("FreeFire");
            onModeChange("Fullmap");
          }}
        >
          FreeFire
        </button>
        <button
          className={selectedGame === "PUBG" ? "active" : ""}
          onClick={() => onGameChange("PUBG")}
        >
          PUBG
        </button>
      </div>
      {selectedGame === "FreeFire" && (
        <div className="mode-buttons">
          <button
            className={selectedMode === "Fullmap" ? "active" : ""}
            onClick={() => onModeChange("Fullmap")}
          >
            Fullmap
          </button>
          <button
            className={selectedMode === "Clash Squad" ? "active" : ""}
            onClick={() => onModeChange("Clash Squad")}
          >
            Clash Squad
          </button>
        </div>
      )}
      {showCreateButton && (
        <button className="create-button" onClick={onCreateClick}>
          Create
        </button>
      )}
    </div>
  );
};

export default GameModeSelector;
