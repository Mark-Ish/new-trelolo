import React from "react"
import { MENU } from "../const/menu.data"
import { Link } from "react-router-dom"
import styles from "../../style/Entities.module.css"

export const MenuItemBlok = () => {
  return (
    <div className={styles.menuList}>
      {MENU.map((page) => (
        <div key={page.link}>
          <Link to={page.link} className={styles.linksMenu}>
            <page.icon />
            <span>{page.name}</span>
          </Link>
        </div>
      ))}
    </div>
  )
}
