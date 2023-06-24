export type User = {
  login?: string
  avatar_url?: string
  company?: string | null
  location?: string | null
  bio?: string | null
  twitter_username?: string | null
  blog: string | null
  public_repos?: number
  followers?: number
  following?: number
  created_at: string
}
