// import { useEffect, useState } from "react";



//  function myhook(currency) {
 
//     const [data, setData] = useState({});
//     useEffect(() => {
//         fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
//         .then( (res)=> res.json())
//         .then( (jsonres)=> setData(jsonres[currency]))
//     }, [currency])

//     return data

// }
// export default myhook;

// myhook.js

import { useEffect, useState } from "react";

function myhook(currency) {
  const [data, setData] = useState({});
//   fetch(`http://localhost:3001/api/currencyInfo/${currency}`)
  useEffect(() => {
    fetch(`/api/currencyInfo/${currency}`)
      .then((res) => res.json())
      .then((jsonres) => setData(jsonres));
  }, [currency]);

  return data;
}

export default myhook;

