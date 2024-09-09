import styles from "../styleFeatures/Features.module.css"
import { CardSkeleton } from "../../entities/cardBoardBan/CardSkeleton"
import { FILTERS } from "../../pages/tasks/const/filters.data"
import { BoardBanAddTask } from "../../entities/cardBoardBan/BoardBanAddTask"
import { filterTask } from "../../pages/tasks/filters/filterTask"
import { memo } from "react"

export const ColumnBoard = memo(function ColumnBoard({
  title,
  id,
  value,
  cardItems,
}) {
  const cardIdArr = cardItems.map((card) => {
    return card.id
  })
  const cardIndex = cardIdArr.length - 1
  const cardId = cardIdArr[cardIndex]

  return (
    <div key={id} className={styles.ColumnBoard}>
      <div className={styles.ColumnHeading}>{title}</div>

      {filterTask({ value, cardItems })?.map((item) =>
        item ? (
          <CardSkeleton
            cardId={cardId}
            valueId={value}
            item={item}
            key={item.id}
            id={id}
          />
        ) : (
          ""
        )
      )}

      {value !== "completed" && (
        <BoardBanAddTask
          value={value}
          filterDate={FILTERS[value] ? FILTERS[value].format() : undefined}
        />
      )}
    </div>
  )
})
