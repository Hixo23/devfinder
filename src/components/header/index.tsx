import { themeContext } from 'contexts/ThemeContext'
import { useContext, useState } from 'react'

interface Props {
  getData: (name: string) => any
}

export const Header = ({ getData }: Props) => {
  const [themeIsDark, setThemeIsDark] = useContext(themeContext)
  const [username, setUsername] = useState<string>('')

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
      <div className="flex justify-center gap-2">
        <input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          className={`w-[60%] h-10 rounded-xl p-4 md:outline-none ${
            themeIsDark ? 'bg-slate-700 text-white' : 'bg-gray-300'
          }`}
          type="text"
        />
        <button
          onClick={() => getData(username)}
          className="bg-blue-500 px-2 rounded-lg text-white"
        >
          Search
        </button>
      </div>
    </header>
  )
}
