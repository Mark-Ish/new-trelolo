import styles from "./LayoutStyle.module.css"
import { Header } from "../widgets/header/Header"
import { Sidebar } from "../widgets/sidebar/Sidebar"
import { Outlet } from "react-router-dom"
import { useAuthFn } from "../processes/AuthProvider"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

const Layout = () => {
  const navigate = useNavigate()
  const user = useAuthFn()

  useEffect(() => {
    if (user === null) {
      navigate("/auth", { replace: true })
    }
  }, [navigate, user])

  return (
    <div className={styles.layout}>
      <aside>
        <Sidebar />
      </aside>
      <main className={styles.mainGlob}>
        <header>
          <Header />
        </header>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
