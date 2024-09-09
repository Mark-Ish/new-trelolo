import styles from "./style/SharedStyle.module.css"
import { useLocation } from "react-router-dom"

export const Heading = () => {
  const location = useLocation().pathname
  const textReplace = location.replace("/", "")
  const textHeading = textReplace.charAt(0).toUpperCase() + textReplace.slice(1)

  return (
    <div className={styles.HeadingStyle}>
      {location === "/" ? <h1>Statistics</h1> : <h1>{textHeading}</h1>}
      <div />
    </div>
  )
}
