import React from "react"
import styles from "./MainPage.module.scss"
import { SideBar } from "./SideBar"
import { MoreDetails } from "./MoreDetails"
import { Cart } from "../components/Cart"

const apiUrl = "https://jsonplaceholder.typicode.com/users"

export type GeoType = {
    lat: string,
    lng: string
}
export type AddressType = {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo : GeoType
}
export type CompanyType = {
    name: string,
    catchPhrase: string,
    bs: string
}
export type CartDataType = {
    id : number,
    name : string,
    username: string,
    email: string,
    address: AddressType,
    phone: string,
    website: string,
    company: CompanyType
}

export default function MainPage() {
  const [data, setData] = React.useState<Array<CartDataType>>(null!)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(null)

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
  
  if (loading) return <div className={styles.loading}>Loading</div>
  if (error) return <div className={styles.error}>Error!</div>
  
  return (
    <div className={styles.mainPage}>
      <SideBar />
      <div className={styles.content}>
        <h3 className={styles.title}>Список пользователей</h3>
        <div className={styles.content__list}>
            {data.map((item : any,index : number)=>{
                return <Cart key={`${item}__${index}`} cartData={item} />
            })}
        </div>
        
      </div>
    </div>
  )
}
