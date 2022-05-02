import React from "react"
import styles from "./InputItem.module.scss"

export const InputItem = ({
  data,
  readOnly,
  labelName,
}: {
  data: string
  readOnly: boolean
  labelName: string
}) => {
  const [value, setValue] = React.useState(data)

  return (
    <div className={styles.form__item}>
      <label className={styles.form__title}>{labelName}</label>
      <input
        type="text"
        name={labelName}
        className={
          readOnly
            ? `${styles.form__input} ${styles.blocked}`
            : styles.form__input
        }
        value={value}
        readOnly={readOnly}
        onChange={(e) => {
          e.preventDefault()
          setValue(e.target.value)
        }}
        required
      />
    </div>
  )
}
