import React, { createContext, useState, useContext, useEffect } from 'react'
import Cookies from 'js-cookie'
import Router, { useRouter } from 'next/router'

const AuthContext = createContext<any>({});

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const router = useRouter()

  useEffect(() => {
    async function loadUserFromCookies() {
      const token = Cookies.get('token')
      setTimeout(() => {
        console.log(token);
        setLoading(false)
        //router.push('/HELLO')
      }, 5000)

    }
    loadUserFromCookies()
  }, [])

  const login = async (email, password) => {
    /*const { data: token } = await api.post('auth/login', { email, password })
    if (token) {
      console.log("Got token")
      Cookies.set('token', token, { expires: 60 })
      api.defaults.headers.Authorization = `Bearer ${token.token}`
      const { data: user } = await api.get('users/me')
      setUser(user)
      console.log("Got user", user)
    }*/
  }

  const logout = (email, password) => {
    /*Cookies.remove('token')
    setUser(null)
    delete api.defaults.headers.Authorization
    window.location.pathname = '/login'*/
  }


  return (
    <AuthContext.Provider value={{ isAuthenticated: !!user, user, login, loading, logout }}>
      {children}
    </AuthContext.Provider>
  )
}



export const useAuth = () => useContext(AuthContext)
