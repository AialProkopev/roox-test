import React from "react"
import styles from "./SideBar.module.scss"

export const SideBar = ({ sortCity, sortCompany }: { sortCity: () => void, sortCompany : () => void }) => {
  return (
    <div className={styles.sideBar}>
      <span className={styles.title}>Сортировка</span>
      <button className={`${styles.button} ${styles.button_city}`} onClick={sortCity}>
        по городу
      </button>
      <button className={`${styles.button} ${styles.button_company}`} onClick={sortCompany} >
        по компании
      </button>
    </div>
  )
}
