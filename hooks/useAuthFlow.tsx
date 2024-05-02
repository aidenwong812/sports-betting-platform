import { FormEvent, useEffect, useState } from "react"
import { toast } from "react-toastify"
import axios from "axios"
import handleTxError from "@/lib/handleTxError"

const useAuthFlow = () => {
  const [loading, setLoading] = useState(false)
  // const [authStatus, setAuthStatus] = useState(STATUS.LOADING)

  const [userName, setUserName] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [userPassword, setUserPassword] = useState("")
  const [isPolicyApproved, setIsPolicyApproved] = useState(false)
  const [userData, setUserData] = useState(null)

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
      console.log(res.data)
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
      setUserData(null)
      localStorage.removeItem("token")
    } catch (err) {
      handleTxError(err)
    }
  }

  useEffect(() => {
    // auth.onAuthStateChanged(async (user) => {
    //   if (user) {
    //     const data = await createUserFromCredential(user)
    //     setUserData(data)
    //     setAuthStatus(STATUS.AUTHORIZED)
    //     return
    //   }

    //   setUserData(null)
    //   setAuthStatus(STATUS.UNAUTHORIZED)
    // })
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
    // authStatus,
    logout,
  }
}

export default useAuthFlow
