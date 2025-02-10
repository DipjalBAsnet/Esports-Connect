import "./ToggleGroup.css";

const ToggleGroup = ({ label, value, options, onChange }) => {
  return (
    <div className="toggle-group">
      <label>{label}</label>
      <div className="toggle-buttons">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            className={value === option ? "active" : ""}
            onClick={() => onChange(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ToggleGroup;
