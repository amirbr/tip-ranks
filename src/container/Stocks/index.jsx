import {useEffect, useState} from "react";
import axios from "axios"
import Stock from "../../components/Stock";
import './style.css'

const GET_STOCKS_URL = 'https://trautocomplete.azurewebsites.net/api/Autocomplete/GetAutocomplete?name=M'

const Stocks = () => {
  const [stocks, setStocks] = useState([])

  useEffect(() => {
    axios.get(GET_STOCKS_URL).then(response => {
      setStocks(response.data)
    }).catch(error => {
      console.log(error, 'error')
    })
  },[])

  return(
    <div className='stock-container'>
      {stocks.map(stock => <Stock key={stock.uid} label={stock.label} value={stock.value} />)}
    </div>
  )
}

export default Stocks
