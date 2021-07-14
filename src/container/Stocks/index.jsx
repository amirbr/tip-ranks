import {useEffect, useState} from "react";
import axios from "axios"
import Stock from "../../components/Stock";
import { debounce } from "../../utils";
import './style.css'

const GET_STOCKS_URL = 'https://trautocomplete.azurewebsites.net/api/Autocomplete/GetAutocomplete?name='

const sortByAlphabetical = (nameA, nameB) => {
  if(nameA.label > nameB.label) { return -1; }
  if(nameA.label < nameB.label) { return 1; }
  return 0;
}

const Stocks = () => {
  const [stocks, setStocks] = useState([])
  const [input, setInput] = useState('')

  useEffect(() => {
    axios.get(`${GET_STOCKS_URL}${input}`).then(response => {
      const filterStocksByCategory = response.data
        .filter(stock => stock.category === 'ticker')
        .sort(sortByAlphabetical)
        .slice(0, 9)

      setStocks(filterStocksByCategory)
    }).catch(error => {
      console.log(error, 'error')
    })
  },[input])

  const processChange = debounce((e) => handleChange(e));

  const handleChange = (event) => {
    setInput(event.target.value)
  }

  return (
    <div>
      <input className='input-style' type="text" onChange={processChange}/>
      <div className='stock-container'>
        {stocks.map((stock, index) => (
          <Stock
            position={index}
            key={stock.uid}
            label={stock.label}
            value={stock.value}
            category={stock.category}
            uid={stock.uid}
          />))}
      </div>
    </div>
  )
}

export default Stocks
