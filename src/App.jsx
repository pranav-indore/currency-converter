import { useState } from 'react'
import myhook from './hooks/myhook';
import Inputbox from './components/Inputbox';




function App() {
  
  const [amount, setAmount] = useState(0);
  const [tocurrency, settocurrency] = useState('inr');
  const [fromcurrency, setfromcurrency] = useState('usd');
  const [converted, setConverted] = useState(0);


  const currencyInfo=myhook(fromcurrency);
  const currencyoptions=Object.keys(currencyInfo);

  const convertcurrency=()=>{
    setConverted(amount* currencyInfo[tocurrency])
  }



  return (
    
      <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
      style={{backgroundImage: `url(https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`}}
      >
        <div className='w-full'>
          <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>

          <form name='currencyconvert' onSubmit={(e) => {
            e.preventDefault()
            convertcurrency()
          }}>
            <div  className='w-full mb-1'>
              <Inputbox
                label='from'
                currency={fromcurrency}
                amount={amount}
                oncurrencychange={(currency)=> {setfromcurrency(currency)}}
                onamountchange={(amount)=>setAmount(amount)}
                currencyoption={currencyoptions} 
                />
            </div>
              
            <div  className='w-full mb-1'>
            <Inputbox
              label='to'
              currency={tocurrency}
              amount={converted}
              oncurrencychange={(currency)=> {settocurrency(currency)}}
              // onamountchange={(amount)=>set(amount)}
              currencyoption={currencyoptions} 
              
              />
            </div>

            <button
            type='submit'
            className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
            >Convert {fromcurrency.toUpperCase()} to {tocurrency.toUpperCase()}</button>
          </form>
          </div>
        </div>
        

        
      </div>
    
    )
}

export default App
