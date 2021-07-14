import './style.css'

const Stock = ({ label, value, category, uid, position }) => (
  <div onClick={() => alert(`This stock position is: ${position}`)} className='stock'>
    <div>Stock Name: {label}</div>
    <div>Value: {value}</div>
    <div>Category: {category}</div>
    <div onClick={(e) => {e.stopPropagation(); alert(`This is uid: ${uid}`)}}>Uid: {uid}</div>
  </div>
)

export default Stock
