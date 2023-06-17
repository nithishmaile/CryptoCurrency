// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import CryptocurrenciesList from '../CryptocurrenciesList'

import './index.css'

class CryptocurrencyTracker extends Component() {
  state = {cryptocurrenciesData: [], isLoading: true}

  componentDidMount() {
    this.getCryptocurrencies()
  }

  getCryptocurrencies = async () => {
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
    this.setState({currencyData: convertToSnakeToCamel, isLoading: false})
  }

  renderCryptoCurrenciesList = () => {
    const {cryptocurrenciesData} = this.state

    return <CryptocurrenciesList cryptocurrenciesData={cryptocurrenciesData} />
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="Rings" color="#ffffff" height={80} width={80} />
    </div>
  )

  render() {
    const {isLoading} = this.state

    return (
      <div className="app-container">
        {isLoading ? this.renderLoader() : this.renderCryptoCurrenciesList()}
      </div>
    )
  }
}

export default CryptocurrencyTracker
