import { useTheme } from 'contexts/ThemeContext'
import { useState } from 'react'

interface Props {
  getData: (name: string) => void
}

export const Header = ({ getData }: Props) => {
  const { themeIsDark, setThemeIsDark } = useTheme()
  const [username, setUsername] = useState<string>('')

  const handleEnter = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      getData(username)
    }
  }

  return (
    <header
      className={`mb-24 flex h-24 w-screen flex-col justify-center bg-slate-200 
        py-24 dark:bg-slate-800
      `}
    >
      <div className="mt-16 flex items-center justify-around gap-4 pb-12">
        <h1 className={`text-3xl text-black dark:text-white`}>Devfinder</h1>
        <button
          onClick={() => setThemeIsDark((prevValue) => !prevValue)}
          className={`text-3xl text-black dark:text-white`}
        >
          {themeIsDark ? (
            <i className="fa-solid fa-sun"></i>
          ) : (
            <i className="fa-solid fa-moon"></i>
          )}
        </button>
      </div>
      <div className="relative flex items-center justify-center gap-2">
        <div className="relative flex items-center">
          <form className="flex flex-col gap-2">
            <label
              className={`font-medium 
              text-gray-700 dark:text-gray-400 md:mr-4`}
            >
              Github profile name
            </label>
            <div className="flex gap-2">
              <div className="flex items-center">
                <input
                  onKeyDown={handleEnter}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setUsername(e.target.value)
                  }
                  value={username}
                  className={`h-10 rounded-xl bg-gray-300 px-10  py-4 dark:bg-slate-700 dark:text-white
                  md:outline-none`}
                  type="text"
                />
                <span
                  className={`fa-solid fa-magnifying-glass absolute left-4 text-gray-800
                  dark:text-gray-200`}
                ></span>
              </div>
              <button
                onClick={() => getData(username)}
                className="rounded-lg bg-blue-500 p-2 text-white"
                type="button"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </header>
  )
}
