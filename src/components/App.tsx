import { useState } from 'react'
import { Header } from './Header/Header'
import { themeContext } from 'contexts/ThemeContext'
import { Profile } from './Profile/Profile'
import type { User } from 'types'
function App() {
  const [themeIsDark, setThemeIsDark] = useState(true)
  const [user, setUser] = useState<User | null>(null)
  const [error, setError] = useState<boolean>(false)

  const getData = async (name: string) => {
    if (name.trim() == '') return
    const response = await fetch(`https://api.github.com/users/${name}`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'GET'
    })

    if (response.status === 404) setError(true)

    if (response.status !== 200) return

    const json = await response.json()
    setError(false)
    return setUser(json)
  }

  return (
    <themeContext.Provider value={{ themeIsDark, setThemeIsDark }}>
      <main
        className={`${
          themeIsDark ? 'bg-slate-800' : 'bg-white'
        } h-screen w-screen font-outfit`}
      >
        <Header getData={getData} />
        {error ? (
          <p
            className={`text-center text-4xl ${
              themeIsDark ? 'text-white' : 'text-gray-700'
            }`}
          >
            User not found!
          </p>
        ) : (
          <>{user !== null && <Profile {...user} />}</>
        )}
      </main>
    </themeContext.Provider>
  )
}

export default App
