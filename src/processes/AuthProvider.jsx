import { createContext, useContext, useEffect, useState } from "react"
import { useAuth } from "../globalHooks/use-auth"

const AuthContext = createContext(null)

export default function AuthProvider({ children }) {
  const { isUser } = useAuth()
  const [user, setUser] = useState(null)

  useEffect(() => {
    if (isUser) {
      setUser({ id: 1 })
    } else {
      setUser(null)
    }
  }, [isUser])

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
}

export const useAuthFn = () => {
  const context = useContext(AuthContext)

  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }

  return context
}
