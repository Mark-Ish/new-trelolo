import dayjs from "dayjs"
import LocalizedFormat from "dayjs/plugin/localizedFormat"
import { DayPicker } from "react-day-picker"
import "./DateStyle.css"
import "react-day-picker/dist/style.css"
import { useState } from "react"
import { iconCross } from "../../../../shared/ui/icons/tasksIcon/iconCross"
import useOutside from "../../../../globalHooks/useOutside"

dayjs.extend(LocalizedFormat)

export function DatePickerBtn({ onChange, value }) {
  const cross = { iconCross }
  const [selected, setSelected] = useState("")
  const { ref, isShow, setIsShow } = useOutside(false)

  function handleDaySelect(date) {
    const isoDate = date?.toISOString()

    setSelected(date)

    if (isoDate) {
      onChange(isoDate)
      setIsShow(false)
    } else {
      onChange("")
    }
  }
  return (
    <div ref={ref}>
      <button className="DatePickerBtn" onClick={() => setIsShow(!isShow)}>
        {value ? dayjs(value).format("LL") : "Click to select"}
      </button>
      {value && (
        <button onClick={() => onChange("")} className="clearDateBtn">
          <cross.iconCross />
        </button>
      )}
      {isShow && (
        <div className="DateBoard">
          <DayPicker
            fromYear={2024}
            toYear={2060}
            initialFocus={isShow}
            mode="single"
            defaultMonth={selected}
            selected={selected}
            onSelect={handleDaySelect}
            weekStartsOn={1}
          />
        </div>
      )}
    </div>
  )
}
