// Write your JS code here

import './index.css'

const CryptocurrencyItem = props => {
  const {cryptocurrencyDetails} = props

  const {
    usdValue,
    euroValue,
    currencyLogo,
    currencyName,
  } = cryptocurrencyDetails

  return (
    <li className="cryptocurrency-item">
      <div className="logo-and-title-container">
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="usd-and-euro-values-container">
        <p className="currency-value">{usdValue}</p>
        <p className="currency-value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
