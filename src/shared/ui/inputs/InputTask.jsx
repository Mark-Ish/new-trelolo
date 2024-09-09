import { forwardRef } from "react"
import styles from "../style/SharedStyle.module.css"

export const InputTask = forwardRef(({ watch, ...rest }, ref) => {
  return (
    <input
      placeholder="Enter task..."
      className={
        watch === "true"
          ? `${styles.completedInput} ${styles.InputTask}`
          : styles.InputTask
      }
      ref={ref}
      {...rest}
    />
  )
})
