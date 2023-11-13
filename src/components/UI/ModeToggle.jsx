import "./ModeToggle.css";

// eslint-disable-next-line react/prop-types
export default function Toggle({ handleChange, isChecked }) {
  return (
    <div className="toggle-container">
      <input
        type="checkbox"
        id="check"
        className="toggle"
        onChange={handleChange}
        checked={isChecked}
      />
      <label htmlFor="check">Toggle Mode</label>
    </div>
  );
}
