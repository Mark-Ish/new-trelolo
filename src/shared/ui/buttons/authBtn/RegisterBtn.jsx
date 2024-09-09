import styles from "../../style/SharedStyle.module.css"

export const RegisterBtn = ({ type, id }) => {
  return (
    <button id={id} type={type} className={styles.registerBtn}>
      Register
    </button>
  )
}
