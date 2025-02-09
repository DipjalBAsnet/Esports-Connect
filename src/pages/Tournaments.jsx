import { useState } from "react";
import TournamentCard from "../components/TournamentCard";
import "./Tournaments.css";

const Tournaments = () => {
  const [selectedGame, setSelectedGame] = useState("FreeFire");
  const [selectedMode, setSelectedMode] = useState("Fullmap");
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    roomType: "",
    players: "1v1",
    limitedAmmo: "",
    characterSkills: "",
    headshot: "",
    gunAttributes: "",
    roomMaker: "",
    amount: "",
  });

  // Sample tournament data
  const tournaments = [
    // FreeFire Tournaments
    {
      id: 1,
      name: "FreeFire Fullmap Weekly Cup",
      entryFee: 10,
      prizePool: 500,
      startTime: "2023-10-15 18:00",
      game: "FreeFire",
      mode: "Fullmap",
    },
    {
      id: 2,
      name: "FreeFire Clash Squad Duo",
      entryFee: 15,
      prizePool: 800,
      startTime: "2023-10-17 19:00",
      game: "FreeFire",
      mode: "Clash Squad",
    },
    // PUBG Tournaments
    {
      id: 3,
      name: "PUBG Solo Challenge",
      entryFee: 5,
      prizePool: 300,
      startTime: "2023-10-16 20:00",
      game: "PUBG",
    },
    {
      id: 4,
      name: "PUBG Squad Battle",
      entryFee: 20,
      prizePool: 1000,
      startTime: "2023-10-18 21:00",
      game: "PUBG",
    },
  ];

  // Filter tournaments based on game and mode
  const filteredTournaments = tournaments.filter((tournament) => {
    if (selectedGame === "FreeFire") {
      return tournament.game === "FreeFire" && tournament.mode === selectedMode;
    } else {
      return tournament.game === "PUBG";
    }
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Challenge Details:", formData);
    alert("Challenge Created Successfully!");
    setShowForm(false); // Close the form
  };

  return (
    <div className="tournaments">
      <h1>Tournaments</h1>

      <div className="game-buttons">
        <button
          className={selectedGame === "FreeFire" ? "active" : ""}
          onClick={() => {
            setSelectedGame("FreeFire");
            setSelectedMode("Fullmap"); // Reset mode when switching to FreeFire
          }}
        >
          FreeFire
        </button>
        <button
          className={selectedGame === "PUBG" ? "active" : ""}
          onClick={() => setSelectedGame("PUBG")}
        >
          PUBG
        </button>
      </div>

      {/* FreeFire Mode Buttons */}
      {selectedGame === "FreeFire" && (
        <div className="mode-buttons">
          <button
            className={selectedMode === "Fullmap" ? "active" : ""}
            onClick={() => setSelectedMode("Fullmap")}
          >
            Fullmap
          </button>
          <button
            className={selectedMode === "Clash Squad" ? "active" : ""}
            onClick={() => setSelectedMode("Clash Squad")}
          >
            Clash Squad
          </button>
        </div>
      )}

      {/* +Create Button (only for Clash Squad) */}
      {selectedGame === "FreeFire" && selectedMode === "Clash Squad" && (
        <button className="create-button" onClick={() => setShowForm(true)}>
          Create
        </button>
      )}

      {/* Challenge Creation Modal */}
      {showForm && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Create Challenge</h2>
            <form onSubmit={handleSubmit}>
              {/* 1. Room Type */}
              <div className="form-group">
                <label>Room Type:</label>
                <div className="toggle-buttons">
                  {["Custom Room", "Lonewolf"].map((type) => (
                    <button
                      key={type}
                      type="button"
                      className={formData.roomType === type ? "active" : ""}
                      onClick={() =>
                        setFormData({ ...formData, roomType: type })
                      }
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Players */}
              <div className="form-group">
                <label>Players:</label>
                <select
                  name="players"
                  value={formData.players}
                  onChange={handleInputChange}
                >
                  {["1v1", "2v2", "3v3", "4v4"].map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* 3. Limited Ammo */}
              <ToggleGroup
                label="Limited Ammo:"
                value={formData.limitedAmmo}
                options={["Yes", "No"]}
                onChange={(val) =>
                  setFormData({ ...formData, limitedAmmo: val })
                }
              />

              {/* 4. Character Skills */}
              <ToggleGroup
                label="Character Skills:"
                value={formData.characterSkills}
                options={["Yes", "No"]}
                onChange={(val) =>
                  setFormData({ ...formData, characterSkills: val })
                }
              />

              {/* 5. Headshot */}
              <ToggleGroup
                label="Headshot:"
                value={formData.headshot}
                options={["Yes", "No"]}
                onChange={(val) => setFormData({ ...formData, headshot: val })}
              />

              {/* 6. Gun Attributes */}
              <ToggleGroup
                label="Gun Attributes:"
                value={formData.gunAttributes}
                options={["Yes", "No"]}
                onChange={(val) =>
                  setFormData({ ...formData, gunAttributes: val })
                }
              />

              {/* 7. Room Maker */}
              <ToggleGroup
                label="Room Maker:"
                value={formData.roomMaker}
                options={["Me", "Opponent"]}
                onChange={(val) => setFormData({ ...formData, roomMaker: val })}
              />

              {/* 8. Amount */}
              <div className="form-group">
                <label>Amount (Rs):</label>
                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  placeholder="Enter amount"
                  required
                />
              </div>

              {/* Form Buttons */}
              <div className="form-actions">
                <button type="submit">Create</button>
                <button type="button" onClick={() => setShowForm(false)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Display Tournaments */}
      <div className="tournaments-grid">
        {filteredTournaments.map((tournament) => (
          <TournamentCard key={tournament.id} tournament={tournament} />
        ))}
      </div>
    </div>
  );
};

// Reusable Toggle Group Component
const ToggleGroup = ({ label, value, options, onChange }) => (
  <div className="form-group">
    <label>{label}</label>
    <div className="toggle-buttons">
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          className={value === opt ? "active" : ""}
          onClick={() => onChange(opt)}
        >
          {opt}
        </button>
      ))}
    </div>
  </div>
);

export default Tournaments;
