import { themeContext } from 'contexts/ThemeContext'
import { useContext, useState } from 'react'

interface Props {
  getData: (name: string) => any
}

export const Header = ({ getData }: Props) => {
  const [themeIsDark, setThemeIsDark] = useContext(themeContext)
  const [username, setUsername] = useState<string>('')

  const handleEnter = (e: React.KeyboardEvent) => {
    if(e.key === "Enter") getData(username);
  }

  return (
    <header className="flex w-screen flex-col h-24 justify-center mb-24">
      <div className="flex justify-around items-center pb-12 mt-16 gap-4">
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
      <div className="flex justify-center gap-2 relative items-center">
        <input
         onKeyDown={handleEnter}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          className={`w-[60%] h-10 rounded-xl px-10 py-4 md:outline-none ${
            themeIsDark ? 'bg-slate-700 text-white' : 'bg-gray-300'
          }`}
          type="text"
        />
        <i className={`fa-solid fa-magnifying-glass absolute left-64 px-2 ${themeIsDark ? 'text-gray-200' : 'text-gray-800'}`}></i>
        <button
          onClick={() => getData(username)}
          className="bg-blue-500 p-2 rounded-lg text-white"
        >
          Search
        </button>
      </div>
    </header>
  )
}
