import { useEffect, useState } from 'react'
import './App.css'
import {ThemeProvider} from "./contexts/theme"
import ThemeBtn from './components/ThemeBtn';
import Card from './components/Card';

function App() {

  // We have declared the methods in the theme.js while creating the object of Provider
  // And here we have initialized the method as to what it will do 
  const [themeMode,setThemeMode] = useState("light");

  const lightMode = () => {
    setThemeMode("light");
  }

  const darkMode = () => {
    setThemeMode("dark");
  }

  // Now we have to write the working/ functionality so that it works
  useEffect( () => {
    document.querySelector("html").classList.remove("light","dark");
    document.querySelector("html").classList.add(themeMode);
  },[themeMode])

  return (
    <>
        <ThemeProvider value={{themeMode,darkMode,lightMode}}> 
          <div className="flex flex-wrap min-h-screen items-center">
              <div className="w-full">
                  <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                      {/* Theme Button */}
                    <ThemeBtn />
                  </div>

                  <div className="w-full max-w-sm mx-auto">
                      {/* Card */}
                      <Card />
                  </div>
              </div>
          </div>
        </ThemeProvider>

    </>
  )
}

export default App
