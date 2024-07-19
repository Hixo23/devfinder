import { themeContext } from 'contexts/ThemeContext'
import { useContext, useState } from 'react'

interface Props {
  getData: (name: string) => void
}

export const Header = ({ getData }: Props) => {
  const { themeIsDark, setThemeIsDark } = useContext(themeContext)
  const [username, setUsername] = useState<string>('')

  const handleEnter = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') getData(username)
  }

  return (
    <header className="mb-24 flex h-24 w-screen flex-col justify-center">
      <div className="mt-16 flex items-center justify-around gap-4 pb-12">
        <h1 className={`text-3xl ${themeIsDark ? 'text-white' : 'text-black'}`}>
          Devfinder
        </h1>
        <button
          onClick={() => setThemeIsDark(!themeIsDark)}
          className={`${themeIsDark ? 'text-white' : 'text-black'} text-3xl`}
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
          <input
            onKeyDown={handleEnter}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUsername(e.target.value)
            }
            value={username}
            className={`h-10 rounded-xl px-10 py-4 md:outline-none ${
              themeIsDark ? 'bg-slate-700 text-white' : 'bg-gray-300'
            }`}
            type="text"
          />
          <span
            className={`fa-solid fa-magnifying-glass absolute left-4 ${
              themeIsDark ? 'text-gray-200' : 'text-gray-800'
            }`}
          ></span>
        </div>
        <button
          onClick={() => getData(username)}
          className="rounded-lg bg-blue-500 p-2 text-white"
        >
          Search
        </button>
      </div>
    </header>
  )
}
