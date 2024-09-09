import dayjs from "dayjs"
import "dayjs/locale/ru"
import isoWeek from "dayjs/plugin/isoWeek"
import weekOfYear from "dayjs/plugin/weekOfYear"

dayjs.extend(weekOfYear)
dayjs.extend(isoWeek)

export const FILTERS = {
  today: dayjs().startOf("day"),
  tomorrow: dayjs().add(1, "day").startOf("day"),
  "up-this-week": dayjs().endOf("isoWeek"),
  "by-next-week": dayjs().add(1, "week").startOf("day"),
  deferred: dayjs().add(2, "week").startOf("day"),
}
