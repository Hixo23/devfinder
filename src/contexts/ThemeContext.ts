import { createContext } from 'react'

type themeContext = {
  themeIsDark: boolean
  setThemeIsDark: (newValue: boolean) => void
}

export const themeContext = createContext<themeContext>({
  themeIsDark: false,
  setThemeIsDark: () => undefined
})
