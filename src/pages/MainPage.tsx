import React from "react"
import styles from "./MainPage.module.scss"
import { SideBar } from "./SideBar"
import { MoreDetails } from "./MoreDetails"
import { Cart } from "../components/Cart"

const apiUrl = "https://jsonplaceholder.typicode.com/users"

export type GeoType = {
  lat: string
  lng: string
}
export type AddressType = {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: GeoType
}
export type CompanyType = {
  name: string
  catchPhrase: string
  bs: string
}
export type CartDataType = {
  id: number
  name: string
  username: string
  email: string
  address: AddressType
  phone: string
  website: string
  company: CompanyType
}

export default function MainPage() {
  const [data, setData] = React.useState<Array<CartDataType>>(null!)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(null)
  const [isMoreDetailsShown, setIsMoreDetailsShown] = React.useState(false)
  const [currentData, setCurrentData] = React.useState<CartDataType>(null!)

  const handleMoreDetails = (data: CartDataType) => {
    setIsMoreDetailsShown(true)
    setCurrentData(data)
  }

  const handleSortDataCity = () => {
    setData(
      [...data].sort(function (obj1, obj2) {
        if (obj1.address.city < obj2.address.city) return -1
        if (obj1.address.city > obj2.address.city) return 1
        return 0
      })
    )
  }

  const handleSortDataCompany = () => {
    setData(
      [...data].sort(function (obj1, obj2) {
        if (obj1.company.name < obj2.company.name) return -1
        if (obj1.company.name > obj2.company.name) return 1
        return 0
      })
    )
  }

  React.useEffect(() => {
    fetch(apiUrl)
      .then((res) => {
        if (res.ok) return res.json()
        throw res
      })
      .then((data) => {
        setData(data)
      })
      .catch((error) => {
        console.log("Error fetching data: ", error)
        setError(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])
  
  if (loading) return <div className={styles.loading}></div>
  if (error) return <div className={styles.error}>Error!</div>

  return (
    <div className={styles.mainPage}>
      <SideBar
        sortCity={handleSortDataCity}
        sortCompany={handleSortDataCompany}
      />
      {isMoreDetailsShown ? (
        <MoreDetails data={currentData} />
      ) : (
        <div className={styles.content}>
          <h3 className={styles.title}>Список пользователей</h3>
          <div className={styles.content__list}>
            {data.map((item: CartDataType, index: number) => (
              <Cart
                key={item.id}
                cartData={item}
                handleMoreDetails={handleMoreDetails}
              />
            ))}
          </div>
          <div className={styles.count}>
            <div className={styles.count__item}>
              Найдено {data.length} пользователей
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
