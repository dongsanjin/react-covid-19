import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'

export const fetchData = async (country) => {
    try {
        const response = await axios.get(url + (country ? `/countries/${country}` : ''))

        return response.data
    } catch (err) {
        
    }
}

export const fetchDailyData = async () => {
    try {
        const response = await axios.get(url + '/daily')

        return response.data
    } catch (err) {
        
    }
}


export const countries = async () => {
    try {
        const response = await axios.get(url + '/countries')

        return response.data
    } catch (err) {
        
    }
}