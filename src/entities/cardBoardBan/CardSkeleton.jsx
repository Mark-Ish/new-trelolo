import styles from "../style/Entities.module.css"
import { iconPiList } from "../../shared/ui/icons/tasksIcon/iconPiList"
import { CheckBox } from "../../shared/ui/inputs/CheckBox"
import { InputTask } from "../../shared/ui/inputs/InputTask"
import { DatePickerBtn } from "../../shared/ui/buttons/tasksBtn/DatePickerBtn"
import { SelectPriority } from "./SelectPriority"
import { Controller, useForm } from "react-hook-form"
import { ClearCardBtn } from "./ClearCardBtn"

export const CardSkeleton = ({ id, item, valueId, cardId }) => {
  const icons = { iconPiList }
  const { register, control, watch } = useForm({
    defaultValues: {
      isCompleted: item.isCompleted,
      createdDate: item.createdDate,
      priority: false,
    },
  })

  return (
    <div id={cardId}>
      <div
        id="cardSkeleton"
        className={
          watch("isCompleted")
            ? `${styles.completed} ${styles.card}`
            : styles.card
        }
      >
        <div className={styles.cardHeader}>
          <Controller
            control={control}
            name="isCompleted"
            render={({ field: { onChange, value } }) => (
              <CheckBox
                id={cardId}
                item={item}
                value={value}
                onChange={onChange}
              />
            )}
          />
          <InputTask
            {...register("name")}
            watch={watch("isCompleted") ? "true" : "false"}
          />
        </div>

        <div className={styles.cardBody}>
          <Controller
            control={control}
            name="createdDate"
            render={({ field: { onChange, value } }) => (
              <DatePickerBtn value={value || ""} onChange={onChange} />
            )}
          />

          <Controller
            control={control}
            name="priority"
            render={({ field: { onChange, value } }) => (
              <SelectPriority
                data={["high", "medium", "low"]}
                value={value || ""}
                onChange={onChange}
              />
            )}
          />

          <div className={styles.iconsBlock}>
            <ClearCardBtn
              valueId={valueId}
              cardId={cardId}
              className={styles.btnClear}
            />

            <button className={styles.btnPiList}>
              <icons.iconPiList />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
