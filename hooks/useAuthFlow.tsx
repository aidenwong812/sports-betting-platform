import { FormEvent, useEffect, useState } from "react"
import { toast } from "react-toastify"
import axios from "axios"
import jwt from "jsonwebtoken"
import handleTxError from "@/lib/handleTxError"

const useAuthFlow = () => {
  const [loading, setLoading] = useState(false)
  // const [authStatus, setAuthStatus] = useState(STATUS.LOADING)

  const [userName, setUserName] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [userPassword, setUserPassword] = useState("")
  const [isPolicyApproved, setIsPolicyApproved] = useState(false)
  const [userData, setUserData] = useState("")

  const isAuthenticated = userData

  const register = async (event: FormEvent) => {
    setLoading(true)
    event.preventDefault()
    const res = await axios.post(
      "/api/auth/signup",
      {
        username: userName,
        email: userEmail,
        password: userPassword
      }
    );
    if (res.status === 200 && res.data.res === "success") {
      toast.success("Sign Up successful")
    } else {
      if (res.data?.error) {
        toast.error(res.data.error)
      }
    }
    setUserName("")
    setUserEmail("")
    setUserPassword("")
    setLoading(false)
  }

  const login = async (event: FormEvent) => {
    setLoading(true)
    event.preventDefault()

    const res = await axios.post(
      "/api/auth/signin",
      { email: userEmail, password: userPassword }
    )
    if (res.status === 200 && res.data.res === "success") {
      toast.success("Log in successful")
      localStorage.setItem("token", res.data.token)
      setUserData(res.data.token)
    } else {
      if (res.data?.error) {
        toast.error(res.data.error)
      }
    }

    setUserName("")
    setUserEmail("")
    setUserPassword("")
    setLoading(false)
  }

  const logout = () => {
    try {
      // auth.signOut()
      setUserData("")
      localStorage.removeItem("token")
    } catch (err) {
      handleTxError(err)
    }
  }

  useEffect(() => {
    (async () => {
      if (localStorage) {
        const token = localStorage.getItem("token")
        if (token) {
          const res = await axios.post(
            "/api/auth/verifyToken",
            {
              token,
            }
          );
          if (res.status === 200 && res.data.res === "success") {
            setUserData(token)
          } else {
            setUserData("")
          }
        }
      }
    })()
  }, [])

  return {
    userEmail,
    setUserEmail,
    userPassword,
    setUserPassword,
    userName,
    setUserName,
    isPolicyApproved,
    setIsPolicyApproved,
    register,
    login,
    loading,
    isAuthenticated,
    userData,
    logout,
  }
}

export default useAuthFlow
