import styles from "../style/SharedStyle.module.css"
import { forwardRef } from "react"

export const InputEmail = forwardRef(({ label, id, register }, ref) => {
  return (
    <div className={styles.inputLabel}>
      <label>{label}</label>
      <input
        id={id}
        ref={ref}
        className={styles.inputEmail}
        type="text"
        placeholder="Email..."
        {...register("email", {
          required: "The email is undefined!",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
            message: "Email is not correct",
          },
        })}
      ></input>
    </div>
  )
})
