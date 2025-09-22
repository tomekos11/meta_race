import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : true;
  });

  useEffect(() => {
    const theme = isDarkMode ? "dark" : "light";
    document.documentElement.setAttribute("data-bs-theme", theme);
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleMode = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <Button
      onClick={toggleMode}
      variant="neutral"
      className="dark-mode-toggle ms-3"
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      title={isDarkMode ? "Light Mode" : "Dark Mode"}
    >
      <i className={`fa-solid fa-${isDarkMode ? "moon" : "sun"} dark-mode-icon`} />
    </Button>
  );
}

export default DarkModeToggle;
