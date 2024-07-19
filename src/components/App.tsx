import { useState } from 'react'
import { Header } from './Header/Header'
import { ThemeProvider, useTheme } from 'contexts/ThemeContext'
import { Profile } from './Profile/Profile'
import type { User } from 'types'
function App() {
  const [user, setUser] = useState<User | null>(null)
  const [error, setError] = useState<boolean>(false)
  const { themeIsDark } = useTheme()

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
    <ThemeProvider>
      <Header getData={getData} />
      <main
        className={`${
          themeIsDark ? 'bg-slate-800' : 'bg-white'
        } h-screen w-screen font-outfit`}
      >
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
    </ThemeProvider>
  )
}

export default App
