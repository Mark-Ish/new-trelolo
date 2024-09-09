import styles from "./style/Home.module.css"

export const HomePage = () => {
  // Заменить все колонки на массив из раздела Tasks
  return (
    <div className={styles.mainStatistic}>
      <div className={styles.columsStatistic}>
        <div className={styles.label}>All</div>
        <div className={styles.content}>0</div>
      </div>

      <div className={styles.columsStatistic}>
        <div className={styles.label}>Completed tasks</div>
        <div className={styles.content}>0</div>
      </div>

      <div className={styles.columsStatistic}>
        <div className={styles.label}>Today tasks</div>
        <div className={styles.content}>0</div>
      </div>

      <div className={styles.columsStatistic}>
        <div className={styles.label}>Weekly tasks</div>
        <div className={styles.content}>0</div>
      </div>
    </div>
  )
}
