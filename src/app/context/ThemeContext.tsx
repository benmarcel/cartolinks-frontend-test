'use client'

// We're using a client component because we need to use hooks like `useState` and `useContext`
// which only work in the browser.
import React, { createContext, useContext, useState } from 'react'

// 1. This is like a plan for what our theme object will look like.
// It says it will have a 'theme' that can only be 'light' or 'dark'
// and a function called 'toggleTheme'.
interface ThemeContextType {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

// 2. We're creating the actual context here. Think of it as an empty bucket
// that we will later fill with our theme data.
const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

// 3. This is the component that holds all the theme logic. We wrap our whole app with it.
// It has a special `children` prop, which is just all the components inside it.
interface ThemeProviderProps {
  children: React.ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  // This is our state variable. It holds the current theme ('light' by default).
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  
  // This function flips the theme from 'light' to 'dark' and vice-versa.
    const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    
    // Add or remove 'dark' class from HTML element
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    // We use the Provider to share our `theme` and `toggleTheme` function
    // with all the components inside it.
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// 4. This is a custom hook  to make it super easy to use the theme in other components.
// It grabs the data from the context.
export function useTheme() {
  const context = useContext(ThemeContext)
  
  // This is a little check to make sure nobody tries to use the theme hook
  // outside of our `ThemeProvider` component, which would cause an error.
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  
  return context
}
