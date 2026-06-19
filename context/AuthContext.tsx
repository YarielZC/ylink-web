'use client'

import { createContext, useContext, useEffect, useState } from 'react'

interface User {
  id: string
  name: string
  username: string
  email: string
  links_count: number
}

interface AuthContextType {
  user: User | null
  loading: boolean
  fetchUser: () => Promise<void>
  // logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const fetchUser = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/user/me')

      if (response.ok) {
        const data = await response.json()
        setUser(data)
      }
    } catch (e) {
      console.error('no se pudo encontrar el usuario')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <AuthContext.Provider value={{ fetchUser, user, loading }}>{children}</AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  return context
}
