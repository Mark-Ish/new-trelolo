import useOutside from "../../globalHooks/useOutside"
import styles from "../style/Entities.module.css"
import { Badge } from "../priorityBadge/Badge"
import { iconCross } from "../../shared/ui/icons/tasksIcon/iconCross"

export const SelectPriority = ({ data, onChange, value }) => {
  const { ref, isShow, setIsShow } = useOutside(false)
  const cross = { iconCross }
  const getValue = () => data.find((item) => item === value)

  return (
    <div className={styles.SelectPriorityMain} ref={ref}>
      <button
        onClick={(e) => {
          e.preventDefault()
          setIsShow(!isShow)
        }}
        className={styles.SelectPriorityBtn}
      >
        {getValue() ? (
          <Badge className={styles.SelectedBadge} variant={value}>
            {getValue()}
          </Badge>
        ) : (
          <Badge>Select priority</Badge>
        )}
      </button>

      {value && (
        <button onClick={() => onChange("")} className={styles.clearSelectBtn}>
          <cross.iconCross />
        </button>
      )}

      {isShow && (
        <div className={styles.ConteinerBadge}>
          {data.map((item) => (
            <button
              key={item}
              onClick={(e) => {
                e.preventDefault()
                onChange(item)
                setIsShow(false)
              }}
            >
              <Badge variant={item}>{item}</Badge>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
