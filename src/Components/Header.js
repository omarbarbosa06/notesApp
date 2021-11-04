const Header = ({ handleToggleDarkMode, isDarkMode }) => {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button
        className="save"
        onClick={() =>
          handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
        }
      >
        {isDarkMode ? "Disable" : "Enable"} Dark Mode
      </button>
    </div>
  );
};
export default Header;
