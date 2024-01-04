import { useEffect, useState } from "react";
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo.js'
import { InputBox } from './components'

function App() {

  //States
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");
  const [amount, setAmount] = useState(Number(1));
  const [convertedAmount, setConvertedAmount] = useState(0);
  const data = useCurrencyInfo(fromCurrency); //object w currency(keys) &
                                              //conversion factor(values)  

  const options = Object.keys(data); //an array of all currencies
  
  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  }

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
    setAmount(1);
  }

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
    setAmount(1);
  }

  const handleSwap = (e) => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);  
  }

  useEffect(() => {
    setConvertedAmount(amount * data[toCurrency]);
  }, [amount, fromCurrency, toCurrency, data])

  return (
    <div className="vw-100 vh-100 bg-black d-flex flex-column">
      <div className="w-50 h-75 bg-dark rounded-4 p-4 mt-5 mx-auto d-flex flex-column align-items-center gap-5">
        <h1 className="fw-bold text-white text-center my-2">Currency Converter</h1>
        <div className="w-100 d-flex flex-column align-items-center gap-4">
        <InputBox 
          label="From"
          amount={amount} 
          currencyType={fromCurrency}
          options={options}
          handleAmountChange={handleAmountChange}
          handleCurrencyChange={handleFromCurrencyChange}
        />

        <button onClick={handleSwap} className="btn btn-primary btn-md-md btn-lg-lg rounded-4 swap">Swap {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}</button>

        <InputBox 
          label="To"
          amount={convertedAmount} 
          currencyType={toCurrency}
          options={options}
          handleCurrencyChange={handleToCurrencyChange}
          amountDisabled
        />
        </div>

      </div>

    </div>
  )
}

export default App
