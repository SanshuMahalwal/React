import React from 'react'

function InputBox({label,
    amount,
    currencyType, 
    handleAmountChange, 
    handleCurrencyChange, 
    options, 
    amountDisabled= false
}) {
  return (
    <div className="w-75 bg-warning p-2 rounded-4">
          <div className="d-flex justify-content-between align-items-center my-2">
            <span >{label}</span>
            <span >Currency type</span>
          </div>
          <div className="d-flex justify-content-center gap-2 align-items-center my-2">
            <input id="amount" type="number" className="from-inp fw-bold w-25" value={amount} onChange={(e) => handleAmountChange && handleAmountChange(e)} disabled={amountDisabled} style={{backgroundColor: 'rgba(255, 255, 255, 0.5)'}}/>
            <select id="options" className="rounded-4 fs-5 p-1" value={currencyType} onChange={handleCurrencyChange}>
              {options.map((curr => {
                return(
                  <option key={curr} value={curr}>{curr}</option>
                )
              }))}
            </select>
          </div>
        </div>
  )
}

export default InputBox