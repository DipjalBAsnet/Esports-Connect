import { useState } from "react";
import ToggleGroup from "../ToggleGroup/ToggleGroup";
import "./CreateChallengeForm.css";

const initialState = {
  roomType: "",
  players: "1v1",
  limitedAmmo: "",
  characterSkills: "",
  headshot: "",
  gunAttributes: "",
  roomMaker: "",
  amount: "",
};

const CreateChallengeForm = ({ show, onClose, onChallengeCreate }) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleToggleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) newErrors[key] = "This field is required";
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const challenge = { id: Date.now(), ...formData };
      onChallengeCreate(challenge);
      setFormData(initialState); // Reset form fields to initial state
      setErrors({});
      onClose();
    } else {
      alert("Please fill in all required fields!");
    }
  };

  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Create Challenge</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Room Type:</label>
            <div className="toggle-buttons">
              {["Custom Room", "Lonewolf"].map((type) => (
                <button
                  key={type}
                  type="button"
                  className={formData.roomType === type ? "active" : ""}
                  onClick={() => handleToggleChange("roomType", type)}
                >
                  {type}
                </button>
              ))}
            </div>
            {errors.roomType && (
              <span className="error">{errors.roomType}</span>
            )}
          </div>
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
            {errors.players && <span className="error">{errors.players}</span>}
          </div>
          <ToggleGroup
            label="Limited Ammo:"
            value={formData.limitedAmmo}
            options={["Yes", "No"]}
            onChange={(val) => handleToggleChange("limitedAmmo", val)}
          />
          {errors.limitedAmmo && (
            <span className="error">{errors.limitedAmmo}</span>
          )}
          <ToggleGroup
            label="Character Skills:"
            value={formData.characterSkills}
            options={["Yes", "No"]}
            onChange={(val) => handleToggleChange("characterSkills", val)}
          />
          {errors.characterSkills && (
            <span className="error">{errors.characterSkills}</span>
          )}
          <ToggleGroup
            label="Headshot:"
            value={formData.headshot}
            options={["Yes", "No"]}
            onChange={(val) => handleToggleChange("headshot", val)}
          />
          {errors.headshot && <span className="error">{errors.headshot}</span>}
          <ToggleGroup
            label="Gun Attributes:"
            value={formData.gunAttributes}
            options={["Yes", "No"]}
            onChange={(val) => handleToggleChange("gunAttributes", val)}
          />
          {errors.gunAttributes && (
            <span className="error">{errors.gunAttributes}</span>
          )}
          <ToggleGroup
            label="Room Maker:"
            value={formData.roomMaker}
            options={["Me", "Opponent"]}
            onChange={(val) => handleToggleChange("roomMaker", val)}
          />
          {errors.roomMaker && (
            <span className="error">{errors.roomMaker}</span>
          )}
          <div className="form-group">
            <label>Amount (Rs):</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleInputChange}
              placeholder="Enter amount"
            />
            {errors.amount && <span className="error">{errors.amount}</span>}
          </div>
          <div className="form-actions">
            <button type="submit">Create</button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateChallengeForm;
