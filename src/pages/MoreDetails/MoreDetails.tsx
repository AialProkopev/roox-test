import React from "react"
import { InputItem } from "../../components/InputItem"
import { CartDataType } from "../MainPage"
import styles from "./MoreDetails.module.scss"

export function MoreDetails({ data }: { data: CartDataType }) {
  const [readOnly, setReadOnly] = React.useState(true)

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const value = Object.fromEntries(data.entries())

    console.log(JSON.stringify(value))
  }

  return (
    <div className={styles.content}>
      <div className={styles.header}>
        <h3 className={styles.title}>Профиль пользователя</h3>
        <button
          className={styles.header__button}
          onClick={() => setReadOnly(false)}
        >
          Редактировать
        </button>
      </div>
      <form
        className={styles.form}
        onSubmit={handleSubmit}
      >
        <div className={styles.form__box}>
          <InputItem data={data.name} readOnly={readOnly} labelName={"Name"} />
          <InputItem
            data={data.username}
            readOnly={readOnly}
            labelName={"User name"}
          />
          <InputItem
            data={data.email}
            readOnly={readOnly}
            labelName={"E-mail"}
          />
          <InputItem
            data={data.address.street}
            readOnly={readOnly}
            labelName={"Street"}
          />
          <InputItem
            data={data.address.city}
            readOnly={readOnly}
            labelName={"City"}
          />
          <InputItem
            data={data.address.zipcode}
            readOnly={readOnly}
            labelName={"Zip code"}
          />
          <InputItem
            data={data.phone}
            readOnly={readOnly}
            labelName={"Phone"}
          />
          <InputItem
            data={data.website}
            readOnly={readOnly}
            labelName={"Website"}
          />
          <div className={styles.form__item}>
            <label className={styles.form__title}>Comment</label>
            <textarea
              name="comment"
              className={
                readOnly
                  ? `${styles.form__comment} ${styles.blocked}`
                  : styles.form__comment
              }
              readOnly={readOnly}
            ></textarea>
          </div>
        </div>
        <div className={styles.buttonBox}>
          <button
            className={
              readOnly
                ? `${styles.button} ${styles.button_blocked}`
                : styles.button
            }
            type="submit"
          >
            Отправить
          </button>
        </div>
      </form>
    </div>
  )
}