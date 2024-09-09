import { ColumnBoard } from "../../../features/columnBoardBan/ColumnBoard"
import "../../style/WidgetStyle.css"
import { useRef } from "react"
import { useSelector } from "react-redux"

const BoardBan = () => {
  const state = useSelector((state) => state.boardBan)
  const scrollRef = useRef(null)

  const onWheel = (e) => {
    const container = scrollRef.current
    const containerScrollPosition = scrollRef.current.scrollLeft

    container.scrollTo({
      top: 0,
      left: containerScrollPosition + e.deltaY,
    })
  }

  return (
    <div onWheel={onWheel} ref={scrollRef} className="BoardBan">
      {state.map((column) => (
        <ColumnBoard
          cardItems={column.cardItems}
          value={column.value}
          key={column.id}
          title={column.title}
          id={column.id}
        />
      ))}
    </div>
  )
}

export default BoardBan
