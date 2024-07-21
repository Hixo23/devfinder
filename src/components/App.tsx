import { useEffect, useState } from 'react'
import { Header } from './Header/Header'
import { Profile } from './Profile/Profile'
import { ThemeProvider, useTheme } from 'contexts/ThemeContext'
import type { User } from 'types'

function App() {
  const { themeIsDark } = useTheme()
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

  useEffect(() => {
    console.log(themeIsDark)
  }, [themeIsDark])

  return (
    <div className={themeIsDark ? 'dark' : ''}>
      <main
        className={`h-screen
            w-screen bg-slate-200 font-outfit dark:bg-slate-800`}
      >
        <Header getData={getData} />
        {error ? (
          <p
            className={`text-center text-4xl text-gray-700
            dark:text-white`}
          >
            User not found!
          </p>
        ) : (
          <>{user !== null && <Profile {...user} />}</>
        )}
      </main>
    </div>
  )
}

export default App
