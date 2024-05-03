import React from 'react'

function Inputbox({

  label,
  currency,
  amount,
  oncurrencychange,
  onamountchange,
  currencyoption,
  amoutndisabale=false
}) {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex `}>

      <div className='w-1-2'>
        <label htmlFor="first"className='text-black/40 mb-2 inline-block'>{label}</label>
        <input type="Number" 
        className='outline-none w-full bg-transparent py-1.5'
        id='AmountInput'
        value={amount}
        onChange={(e)=> onamountchange( Number(e.target.value))}
        disabled={amoutndisabale}
        />
      </div>


      <div className='w-1/2 flex flex-wrap justify-end text-right'>
        <p className="text-black/40 mb-2 w-full">Currency Type</p>

        <select 
        className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
        value={currency}
        onChange={(e)=> oncurrencychange(e.target.value)}       
        >
            {
             
              currencyoption.map( (options)=> (
                <option key={options}value={options}>{options}</option>
              ))
            }
        </select>

      </div>

    </div>
  )
}

export default Inputbox     