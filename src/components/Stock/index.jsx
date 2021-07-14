import './style.css'

const Stock = ({ label, value }) => (
  <div className='stock'>
    <div>Stock Name: {label}</div>
    <div>Value: {value}</div>
  </div>
)

export default Stock
