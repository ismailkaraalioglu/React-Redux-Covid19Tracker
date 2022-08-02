import { useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { handleDarkMode, handleLangMode } from "../redux/site/siteSlice";

function Header() {
  const darkMode = useSelector((state) => state.site.dark);
  const langMode = useSelector((state) => state.site.language);
  const dispatch = useDispatch();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    window.localStorage.setItem("theme", JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    window.localStorage.setItem("language", JSON.stringify(langMode));
  }, [langMode]);

  const handleThemeMode = () => {
    dispatch(handleDarkMode());
  };

  const handleLanguage = () => {
    dispatch(handleLangMode());
  };

  return (
    <header className="bg-white py-3 dark:bg-slate-700 w-full">
      <div className="md:max-w-7xl md:mx-auto md:flex md:items-center md:justify-between w-full flex justify-between">
        <a href="/" className="ml-5">
          <div>
            <img
              className="max-h-8 md:max-h-12"
              src={require("../images/image.png")}
              alt="covidtrackerlogo"
            />
            <p className="font-oswald font-extrabold md:text-sm text-[9.5px]">
              Global and Country Wise Cases of Corona Virus
            </p>
          </div>
        </a>

        <div className="mr-5 flex gap-x-3">
          <div
            className="bg-zinc-200 md:w-11 md:h-11 w-9 h-9 shadow-sm rounded-md cursor-pointer hover:bg-zinc-300 select-none dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800"
            onClick={handleThemeMode}
          >
            {darkMode ? (
              <FaSun className="mx-auto relative md:top-1/4 top-2" size={20} />
            ) : (
              <FaMoon
                className="mx-auto relative md:top-1/4 top-1/4"
                size={20}
              />
            )}
          </div>
          <div
            className="bg-zinc-200 md:w-11 md:h-11 w-9 h-9 shadow-sm text-center md:leading-10 leading-8 rounded-md cursor-pointer hover:bg-zinc-300 select-none dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800"
            onClick={handleLanguage}
          >
            {langMode ? "EN" : "TR"}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
