import React from "react";
import LigthPng from "../../src/assets/light-mode-button.png";
import DarkPng from "../../src/assets/dark-mode-button.png";
import { useState, useEffect } from "react";
const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light ");
    }
  }, [theme]);
  return (
    <div>
      <img
        src={LigthPng}
        alt="alaka"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className={`w-14 cursor-pointer 
      drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute sm:right-10 md:hidden lg:hidden xl:hidden 2xl:hidden z-10 ${
        theme === "dark" ? "opacity-0" : "opacity-100"
      }`}
      />
      <img
        src={DarkPng}
        alt=""
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="w-14 cursor-pointer 
       drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 "
      />
    </div>
  );
};

export default DarkMode;
