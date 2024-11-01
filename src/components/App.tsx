import { Header } from './Header/Header'
import { ThemeProvider, useTheme } from 'contexts/ThemeContext'
import { Profile } from './Profile/Profile'
import { useFetchGithubUser } from 'hooks/useFetchGithubUser'
function App() {
  const [fetchGithubUser, githubUser, error, isLoading] = useFetchGithubUser()
  const theme = useTheme()

  return (
    <ThemeProvider>
      <main
        className={`${
          theme.themeIsDark && 'dark'
        } h-screen w-screen font-outfit`}
      >
        <div className="bg-slate-200 dark:bg-slate-800">
          <Header getData={fetchGithubUser} />
          {error && (
            <p
              className={`text-center text-4xl text-gray-700  dark:text-white
              `}
            >
              User not found!
            </p>
          )}
          {isLoading ? (
            <p>Loading</p>
          ) : (
            <>{githubUser !== null && <Profile {...githubUser} />}</>
          )}
        </div>
      </main>
    </ThemeProvider>
  )
}

export default App
