import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction
} from 'react'

type themeContext = {
  themeIsDark: boolean
  setThemeIsDark: Dispatch<SetStateAction<boolean>>
}

export const themeContext = createContext<themeContext>({
  themeIsDark: true,
  setThemeIsDark: () => null
})

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [themeIsDark, setThemeIsDark] = useState(false)
  return (
    <themeContext.Provider value={{ themeIsDark, setThemeIsDark }}>
      {children}
    </themeContext.Provider>
  )
}

export const useTheme = () => useContext(themeContext)
