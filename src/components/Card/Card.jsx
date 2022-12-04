import styles from "./Card.module.css"

import {
  EnvelopeOpen,
  At,
  House,
  Shuffle,
  AddressBook,
  Phone,
} from "phosphor-react"

export function Card({ zipCode, city, district, uf, address, ddd }) {
  return (
    <div className={styles.Card}>
      <p>
        <EnvelopeOpen />
        {zipCode}
      </p>
      <p>
        <House />
        {city}
      </p>
      <p>
        <At />
        {district}
      </p>
      <p>
        <Shuffle />
        {uf}
      </p>
      <p>
        <AddressBook />
        {address}
      </p>
      <p>
        <Phone />
        {ddd}
      </p>
    </div>
  )
}
