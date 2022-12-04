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
        <EnvelopeOpen /> Cep
        {zipCode}
      </p>
      <p>
        <House /> Cidade
        {city}
      </p>
      <p>
        <At /> Bairro
        {district}
      </p>
      <p>
        <Shuffle /> Uf
        {uf}
      </p>
      <p>
        <AddressBook /> Endereço
        {address}
      </p>
      <p>
        <Phone /> DDD
        {ddd}
      </p>
    </div>
  )
}
