import { Link } from "react-router-dom"
import { iconTrello } from "../../shared/ui/icons/sidebarIcon/iconTrello"
import { MenuItemBlok } from "../../entities/sidebarLinks/menuItem/MenuItemBlok"
import styles from "./MenuSidebarEl.module.css"

export const MenuSidebar = () => {
  const trelolo = { icon: iconTrello }
  return (
    <>
      <Link to="/">
        <div className={styles.treloloLink}>
          <div className={styles.treloloIcon}>
            <trelolo.icon />
          </div>
          <span>Trelolo</span>
        </div>
      </Link>

      <MenuItemBlok />
    </>
  )
}
