export type User = {
  login?: string
  avatar_url?: string
  name?: string | null
  company?: string | null
  location?: string | null
  email?: string | null
  hireable?: string | null
  bio?: string | null
  twitter_username?: string | null
  blog: string | null
  public_repos?: number
  followers?: number
  following?: number
  created_at: string
}
