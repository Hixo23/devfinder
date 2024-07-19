import { createContext, useContext, useState } from 'react'

type themeContext = {
  themeIsDark: boolean
  setThemeIsDark: (newValue: boolean) => void
}

export const themeContext = createContext<themeContext>({
  themeIsDark: false,
  setThemeIsDark: () => undefined
})

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [themeIsDark, setThemeIsDark] = useState(true)
  return (
    <themeContext.Provider value={{ themeIsDark, setThemeIsDark }}>
      {children}
    </themeContext.Provider>
  )
}

export const useTheme = () => useContext(themeContext)
