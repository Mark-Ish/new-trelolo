import styles from "../../style/SharedStyle.module.css"

export const LoginBtn = ({ type, id }) => {
  return (
    <button id={id} type={type} className={styles.loginBtn}>
      Login
    </button>
  )
}
