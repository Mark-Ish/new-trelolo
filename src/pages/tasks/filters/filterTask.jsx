import { FILTERS } from "../const/filters.data"
import dayjs from "dayjs"
import isSameOrAfter from "dayjs/plugin/isSameOrAfter"
import isSameOrBefore from "dayjs/plugin/isSameOrBefore"

dayjs.extend(isSameOrAfter)
dayjs.extend(isSameOrBefore)

export const filterTask = ({ cardItems, value }) => {
  switch (value) {
    case "today":
      return cardItems?.filter(
        (item) =>
          dayjs(item.createdDate).isSame(FILTERS.today, "day") &&
          !item.isCompeted
      )
    case "tomorrow":
      return cardItems?.filter(
        (item) =>
          dayjs(item.createdDate).isSame(FILTERS.tomorrow, "day") &&
          !item.isCompeted
      )
    case "up-this-week":
      return cardItems?.filter(
        (item) =>
          !dayjs(item.createdDate).isSame(FILTERS.today) &&
          !dayjs(item.createdDate).isSame(FILTERS.tomorrow) &&
          dayjs(item.createdDate).isSameOrBefore(FILTERS["up-this-week"]) &&
          !item.isCompeted
      )
    case "by-next-week":
      return cardItems?.filter(
        (item) =>
          dayjs(item.createdDate).isAfter(FILTERS["up-this-week"]) &&
          dayjs(item.createdDate).isSameOrBefore(FILTERS["by-next-week"]) &&
          !item.isCompeted
      )
    case "deferred":
      return cardItems?.filter(
        (item) =>
          (dayjs(item.createdDate).isAfter(FILTERS["by-next-week"]) ||
            !item.isCompeted) &&
          !item.isCompeted
      )
    case "completed":
      return cardItems?.filter((item) => item.isCompeted)

    default:
      return []
  }
}
