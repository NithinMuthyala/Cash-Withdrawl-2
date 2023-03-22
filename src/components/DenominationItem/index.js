import './index.css'

const DenominationItem = props => {
  const {eachitem, debitFunc} = props

  const {id, value} = eachitem
  const debitAmount = () => {
    debitFunc(value)
  }
  return (
    <li className="list">
      <button type="button" className="btn" onClick={debitAmount}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
