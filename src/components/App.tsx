import { useState } from 'react'
import { Header } from './header'
import { themeContext } from 'contexts/ThemeContext'
import { Profile } from './Profile'
import type { User } from 'types'

function App() {
  const [themeIsDark, setThemeIsDark] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<boolean>(false);

  const getData = async (name: string) => {
    const response = await fetch(`https://api.github.com/users/${name}`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'GET'
    })

    if(response.status === 404) setError(true)

    if (response.status !== 200) return


    const json = await response.json()
    setError(false)
    return setUser(json)
  }

  return (
    <themeContext.Provider value={[themeIsDark, setThemeIsDark]}>
      <main
        className={`${
          themeIsDark ? 'bg-slate-800' : 'bg-white'
        } w-screen h-screen font-outfit`}
      >
        <Header getData={getData} />
        {error ? (
          <p className='text-4xl text-white text-center'>User not found!</p>
        ) : (
          <>
          {user !== null && (
          <Profile
            {...user}
          />
        )}</>
        )}
      </main>
    </themeContext.Provider>
  )
}

export default App
