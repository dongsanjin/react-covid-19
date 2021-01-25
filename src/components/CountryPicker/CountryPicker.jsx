import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'

import styles from './CountryPicker.module.css'

import { countries } from '../../api'

const CountryPicker = ({ changeCountries }) => {
    const [countriesList, setCountriesList] = useState([])

    useEffect(() => {
        countries()
            .then(res => {
                setCountriesList(res.countries.map(item => item.name))
                console.log(countriesList)
            })
    }, [setCountriesList])

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect onChange={(e) => changeCountries(e.target.value)}>
                <option value="">Global</option>
                {countriesList.map((item, i) => <option key={i} value={item}>{item}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker