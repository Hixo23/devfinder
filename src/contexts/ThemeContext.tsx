import { useLocalStorage } from 'hooks/useLocalStorage'
import { createContext, useContext, Dispatch, SetStateAction } from 'react'

type themeContext = {
  themeIsDark: boolean | unknown
  setThemeIsDark: Dispatch<SetStateAction<boolean>>
}

export const themeContext = createContext<themeContext>({
  themeIsDark: true,
  setThemeIsDark: () => null
})

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [themeIsDark, setThemeIsDark] = useLocalStorage('themeIsDark', true)
  return (
    <themeContext.Provider value={{ themeIsDark, setThemeIsDark }}>
      {children}
    </themeContext.Provider>
  )
}

export const useTheme = () => useContext(themeContext)
