import React from "react"
import { CartDataType } from "../../pages/MainPage"
import styles from "./Cart.module.scss"

export const Cart = ({cartData}: {cartData: CartDataType}) => {
  return (
    <div className={styles.cart}>
      <div className={styles.leftSide}>
        <div className={styles.item}>
          <span className={styles.item__name}>ФИО:</span>
          <div className={styles.item__content}>{cartData.name}</div>
        </div>
        <div className={styles.item}>
          <span className={styles.item__name}>Город:</span>
          <div className={styles.item__content}>{cartData.address.city}</div>
        </div>
        <div className={styles.item}>
          <span className={styles.item__name}>Компания:</span>
          <div className={styles.item__content}>{cartData.company.name}</div>
        </div>
      </div>
      <div className={styles.buttonBox}>
        <button className={styles.buttonMoreDetails}>Подробнее</button>
      </div>
    </div>
  )
}
