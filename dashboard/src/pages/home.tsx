import Router from "next/router";
import { useContext, useEffect } from "react"
import { AuthContext } from "../contexts/AuthContext"

export default function Home() {
  const { isAuthenticated } = useContext(AuthContext);
  
  useEffect(() => {
    if (!isAuthenticated) {
      Router.push('/');
    }
  }, [isAuthenticated])

  return (
    <h1>Home</h1>
  )
} 
