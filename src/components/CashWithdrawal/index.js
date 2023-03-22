import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000, name: 'Sarah Williams'}

  debitFunc = value => {
    const {amount} = this.state
    this.setState(prevState => ({amount: prevState.amount - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {amount, name} = this.state
    const text = name.slice(0, 1)
    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="name-container">
            <div className="letter-container">{text}</div>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <p className="balance-item">Your Balance</p>
            <div className="amount-container">
              <p className="amount-item">{amount}</p>
              <p className="rupee-item">In Rupees</p>
            </div>
          </div>
          <p className="withdraw-heading">Withdraw</p>
          <p className="description">CHOOSE SUM (IN RUPEES)</p>
          <ul className="list-item">
            {denominationsList.map(eachitem => (
              <DenominationItem
                debitFunc={this.debitFunc}
                key={eachitem.id}
                eachitem={eachitem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
