// Write your JS code here
import {Component} from 'react'

import CryptoCurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component() {
  state = {currencyData: []}

  componentDidMount = () => {
    this.getCurrencyDetails()
  }

  getCurrencyDetails = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const convertToSnakeToCamel = data.map(eachObj => ({
      id: eachObj.id,
      usdValue: eachObj.usd_value,
      currencyName: eachObj.currency_name,
      currencyLogo: eachObj.currency_logo,
      euroValue: eachObj.euro_value,
    }))
    this.setState({currencyData: convertToSnakeToCamel})
  }

  render() {
    const {currencyData} = this.state

    return (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        <div className="currency-container">
          <nav className="nav-container">
            <h1 className="coin-type-heading">Coin Type</h1>
            <div className="currency-type-container">
              <h1 className="coin-type-heading currency-type-heading">USD</h1>
              <h1 className="coin-type-heading currency-type-heading">EURO</h1>
            </div>
          </nav>
          <ul>
            {currencyData.map(eachObj => (
              <CryptoCurrencyItem currencyDataList={eachObj} key={eachObj.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList
