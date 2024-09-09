import { MenuSidebar } from "../../features/sidebarElement/MenuSidebar"
import styles from "./style/SidebarStyle.module.css"

// импортировать фьючерс меню
export const Sidebar = () => {
  return (
    <div className={styles.asideBar}>
      <MenuSidebar />
    </div>
  )
}
