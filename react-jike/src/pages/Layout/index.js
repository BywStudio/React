import { useEffect } from "react"
import { request } from "@/utils"

const Layout = () => {
  useEffect(() => {
    request.get('/my/userinfo').then(res => {
      console.log(res.data.data)
    })
  }, [])
  return <h1>Layout</h1>
}

export default Layout