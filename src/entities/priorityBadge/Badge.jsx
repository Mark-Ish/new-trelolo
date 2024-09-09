import styles from "../style/Entities.module.css"

export const Badge = ({ children, variant }) => {
  switch (variant) {
    case "high":
      return (
        <span className={`${styles.Badge} ${styles.high}`}>{children}</span>
      )

    case "medium":
      return (
        <span className={`${styles.Badge} ${styles.medium}`}>{children}</span>
      )

    case "low":
      return <span className={`${styles.Badge} ${styles.low}`}>{children}</span>

    default:
      return (
        <span className={`${styles.Badge} ${styles.default}`}>{children}</span>
      )
  }
}
