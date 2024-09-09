import { memo } from "react"
import styles from "../style/SharedStyle.module.css"
import { completedTask } from "../../../pages/tasks/boardBanSlice"
import { useDispatch } from "react-redux"

let count = 0
export const CheckBox = memo(function CheckBox({ id, onChange, value, item }) {
  count = count + 1
  const dispatch = useDispatch()
  const handleCompleted = () => {
    dispatch(completedTask(item.id))
  }

  return (
    <div onClick={handleCompleted} className={styles.CheckBox}>
      <input
        type="checkbox"
        id={id + count}
        onChange={onChange}
        value={value}
      />
      <label htmlFor={id + count} />
    </div>
  )
})
