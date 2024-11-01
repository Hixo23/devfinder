import { useState } from 'react'
import { User } from 'types'

export const useFetchGithubUser = () => {
  const [githubUser, setGithubUser] = useState<User | null>(null)
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const fetchGithubUser = async (name: string): Promise<void> => {
    setIsLoading(true)
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
    setIsLoading(false)
    return setGithubUser(json)
  }

  return [fetchGithubUser, githubUser, error, isLoading] as const
}
