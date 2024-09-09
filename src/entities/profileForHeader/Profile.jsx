import styles from "../style/Entities.module.css"
import { useAuth } from "../../globalHooks/use-auth"
import { iconExit } from "../../shared/ui/icons/headerIcon/iconExit"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { removeUser } from "../../features/formAuth/authSlice"

export const Profile = () => {
  const { name, email } = useAuth()
  const exit = { icon: iconExit }
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleExitClick = () => {
    navigate("/auth")
    dispatch(removeUser())
  }

  return (
    <div className={styles.profileLayout}>
      <div className={styles.profile}>
        <div className={styles.emailAndName}>
          <p className={styles.nameProfile}>{name ? name : "Noname"}</p>
          <p className={styles.emailProfile}>
            {email ? email : "Email is not defined"}
          </p>
        </div>
        <div className={styles.avatar}>{name?.charAt(0) || "N"}</div>
        <div onClick={handleExitClick}>
          <exit.icon />
        </div>
      </div>
    </div>
  )
}
