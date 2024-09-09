import { useDispatch } from "react-redux"
import { iconClear } from "../../shared/ui/icons/tasksIcon/iconClear"
import {
  clearTaskToday,
  clearTaskTomorrow,
  clearTaskUpThisWeek,
  clearTaskByNextWeek,
  clearTaskDeferred,
} from "../../pages/tasks/boardBanSlice"

export const ClearCardBtn = ({ className, valueId, cardId }) => {
  const dispatch = useDispatch()
  const icons = { iconClear }

  const handleClear = (e) => {
    e.preventDefault()
    const currentCardId = e.target.closest(`#${cardId}`)?.id

    if (currentCardId !== "") {
      const columnTitleId = e.target.parentNode.id
      switch (columnTitleId) {
        case "today":
          return dispatch(clearTaskToday(currentCardId))
        case "tomorrow":
          return dispatch(clearTaskTomorrow(currentCardId))
        case "up-this-week":
          return dispatch(clearTaskUpThisWeek(currentCardId))
        case "by-next-week":
          return dispatch(clearTaskByNextWeek(currentCardId))
        case "deferred":
          return dispatch(clearTaskDeferred(currentCardId))
        default:
          return ""
      }
    }
  }

  return (
    <>
      <button onClick={handleClear} id={valueId} className={className}>
        <icons.iconClear />
      </button>
    </>
  )
}
