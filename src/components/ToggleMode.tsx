import { useEffect, useState } from "react"
import LightIcon from "../assets/Light.svg"
import DarkIcon from "../assets/Dark.svg"

export function ToggleMode() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    const storedTheme = localStorage.getItem("theme")

    if (storedTheme === "dark") {
      root.classList.add("dark")
      setIsDark(true)
    } else {
      root.classList.remove("dark")
      setIsDark(false)
    }
  }, [])

  const toggleTheme = () => {
    const root = document.documentElement
    const newTheme = isDark ? "light" : "dark"

    root.classList.toggle("dark", newTheme === "dark")
    localStorage.setItem("theme", newTheme)
    setIsDark(newTheme === "dark")
  }

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-4 right-4 w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-700 text-black dark:text-white flex items-center justify-center shadow-md transition z-11"
    >
      {isDark ? (
        <img src={DarkIcon} alt="Moon" className="w-6 h-6" />
      ) : (
        <img src={LightIcon} alt="Sun" className="w-6 h-6" />
      )}
    </button>
  )
}
