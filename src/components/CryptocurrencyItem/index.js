// Write your JS code here

import './index.css'

const CryptoCurrencyItem = props => {
  const {currencyDataList} = props

  const {usdValue, euroValue, currencyLogo, currencyName} = currencyDataList

  console.log(currencyDataList)

  return (
    <div>
      <h1>{usdValue}</h1>
      <h1>{euroValue}</h1>
      <h1>{currencyName}</h1>
      <h1>{currencyLogo}</h1>
    </div>
  )
}

export default CryptoCurrencyItem
