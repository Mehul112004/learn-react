import { useState } from "react";
import "./App.css";
import { ThemeProvider } from "./Contexts/Theme";
import { useEffect } from "react";
import Card from "./Components/Card";
import ThemeButton from "./Components/ThemeButton";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  //actual change in theme

  useEffect(() => {
    document.querySelector("body").classList.remove("light","dark")
    document.querySelector("body").classList.add(themeMode)
  }, [themeMode])
  

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <Card/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <ThemeButton/>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
