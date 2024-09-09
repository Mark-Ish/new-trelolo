import styles from "../style/Entities.module.css"
import { useDispatch } from "react-redux"
import { iconAdd } from "../../shared/ui/icons/tasksIcon/iconAdd"
import {
  addTaskToday,
  addTaskTomorrow,
  addTaskUpThisWeek,
  addTaskByNextWeek,
  addTaskDeferred,
} from "../../pages/tasks/boardBanSlice"
import { memo } from "react"

let count = 0
export const BoardBanAddTask = memo(function BoardBanAddTask({
  filterDate,
  value,
}) {
  const dispatch = useDispatch()
  const icon = { iconAdd }

  const addTaskBtn = (e) => {
    ++count
    if (e.target.parentNode.id === "") return

    switch (e.target.parentNode.id) {
      case "today":
        return dispatch(
          addTaskToday({
            id: "card-" + count,
            createdDate: filterDate,
            isCompleted: false,
          })
        )
      case "tomorrow":
        return dispatch(
          addTaskTomorrow({
            id: "card-" + count,
            createdDate: filterDate,
            isCompleted: false,
          })
        )
      case "up-this-week":
        return dispatch(
          addTaskUpThisWeek({
            id: "card-" + count,
            createdDate: filterDate,
            isCompleted: false,
          })
        )
      case "by-next-week":
        return dispatch(
          addTaskByNextWeek({
            id: "card-" + count,
            createdDate: filterDate,
            isCompleted: false,
          })
        )
      case "deferred":
        return dispatch(
          addTaskDeferred({
            id: "card-" + count,
            createdDate: filterDate,
            isCompleted: false,
          })
        )

      default:
        return ""
    }
  }

  return (
    <div className={styles.addTaskContainer} id={value}>
      <button onClick={addTaskBtn} className={styles.addTaskButton}>
        <span>
          <icon.iconAdd />
          Add task
        </span>
      </button>
    </div>
  )
})
