import styles from "../style/SharedStyle.module.css"
import { forwardRef } from "react"

export const InputPass = forwardRef(({ label, id, register }, ref) => {
  return (
    <div className={styles.inputLabel}>
      <label>{label}</label>
      <input
        id={id}
        ref={ref}
        maxLength="8"
        className={styles.inputPassword}
        type="password"
        placeholder="Password..."
        {...register("password", {
          required: "The password is undefined!",
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters",
          },
        })}
      ></input>
    </div>
  )
})
