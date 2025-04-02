import { useContext } from "react";
import { ThemeContext } from "../themeContext";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow-md p-4 flex justify-between items-center z-10">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Susanto</h1>
      <div className="flex items-center gap-4">
        <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">About</a>
        <a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Skills</a>
        <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Projects</a>
        <button onClick={toggleTheme} className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full">
          {theme === "dark" ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-800" />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
