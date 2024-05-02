import { createContext, useContext, useMemo } from "react"
import useAuthFlow from "../hooks/useAuthFlow"

const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
  const authData = useAuthFlow()

  const value = useMemo(
    () => ({
      ...authData,
    }),
    [authData],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider")
  }
  return context
}

export default AuthProvider
