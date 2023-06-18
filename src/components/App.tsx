import { useState } from "react"
import { Header } from "./header"
import { themeContext } from "contexts/ThemeContext"
import { Profile } from "./Profile";
import type { User } from "types";

function App() {
  const [themeIsDark, setThemeIsDark] = useState(true)
  const [user, setUser] = useState<User>({ avatar_url: "", bio: "", company: "", email:"", followers: 0, following: 0, hireable: "", location: "", login: "", name: "", public_repos: 0, twitter_username: "0" });

  const getData = async(name: string) => {
    const response = await fetch(`https://api.github.com/users/${name}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: "GET"
    })

    if(response.status !== 200) return;

    const json = await response.json();

   return setUser(json); 
  }

  return (
  <themeContext.Provider value={[themeIsDark, setThemeIsDark]}>
     <main className={`${themeIsDark ? 'bg-slate-800' : 'bg-gray-200'} w-screen h-screen font-outfit`}>
    <Header getData={getData} />
    <Profile avatar_url={user.avatar_url} bio={user.bio} company={user.company} email={user.email} followers={user.followers} following={user.following} hireable={user.hireable} location={user.location} login={user.login} name={user.name} public_repos={user.public_repos} twitter_username={user.twitter_username} />
   </main>
  </themeContext.Provider>
  )
}

export default App
 