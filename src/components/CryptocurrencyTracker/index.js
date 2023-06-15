// Write your code here
import CryptoCurrencyItem from '../CryptocurrencyItem'

import CryptocurrenciesList from '../CryptocurrenciesList'

import './index.css'

const CryptocurrencyTracker = () => (
  <div className="bg-container">
    <CryptocurrenciesList />
    <CryptoCurrencyItem />
  </div>
)

export default CryptocurrencyTracker
