import React, { useState, useEffect } from 'react'

import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css'
import { fetchData } from './api'

function App () {
  const [covidData, setCovidData] = useState({})
  const [country, setCountry] = useState('')

  useEffect(() => {
    fetchData()
      .then(res => {
        setCovidData(res)
        console.log(res)
      })
  }, [])

  const changeCountries = (val) => {

    fetchData(val)
      .then(res => {
        setCountry(val)
        setCovidData(res)
      })
  }

  return (
    <div className={styles.container}>
      <Cards data={covidData} />
      <CountryPicker changeCountries={changeCountries} />
      <Chart country={country} data={covidData} />
    </div>
  )
}

export default App