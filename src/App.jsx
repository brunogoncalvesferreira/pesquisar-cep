import styles from "./App.module.css"
import { Copyright, MagnifyingGlass } from "phosphor-react"
import { Card } from "./components/Card/Card"
import { useState } from "react"

export function App() {
  const [changeZip, setChangeZip] = useState("")
  const [zipCode, setZipCode] = useState([])

  function handleSearchZipCode(e) {
    e.preventDefault()

    if (changeZip === "") {
      alert("Digite algum Cep!")
      setChangeZip("")
    } else if (changeZip.length < 8) {
      alert("Somente CEP com 8 dígistos!")
    }

    fetch(`https://viacep.com.br/ws/${changeZip}/json/`)
      .then((response) => response.json())
      .then((data) => {
        const zip = {
          zipCode: data.cep,
          city: data.localidade,
          district: data.bairro,
          uf: data.uf,
          address: data.logradouro,
          ddd: data.ddd,
        }
        setZipCode([zip])
      })
      .catch((error) => {
        console.log("Erro: " + error)
      })
    setChangeZip("")
  }

  return (
    <div className={styles.App}>
      <header>
        <h1>Pesquisa Cep</h1>
      </header>
      <main>
        <form>
          <input
            type="text"
            placeholder="Digite o cep"
            onChange={(event) => setChangeZip(event.target.value)}
            value={changeZip}
          />
          <button onClick={handleSearchZipCode}>
            Buscar <MagnifyingGlass weight="fill" />
          </button>
        </form>
        {zipCode.map((data) => (
          <Card
            zipCode={data.zipCode}
            city={data.city}
            district={data.district}
            uf={data.uf}
            address={data.address}
            ddd={data.ddd}
            key={data.address}
          />
        ))}
      </main>
      <footer>
        <p>
          Copyright
          <Copyright />
          Bruno | 2022
        </p>
      </footer>
    </div>
  )
}
