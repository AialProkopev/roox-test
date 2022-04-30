import React from "react"
import styles from "./SideBar.module.scss"

export const SideBar = () => {
  return (
    <div className={styles.sideBar}>
      <span className={styles.title}>Сортировка</span>
      <button className={`${styles.button} ${styles.button_city}`}>
        по городу
      </button>
      <button className={`${styles.button} ${styles.button_company}`}>
        по компании
      </button>
    </div>
  )
}
