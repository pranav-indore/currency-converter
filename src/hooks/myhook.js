import { useEffect, useState } from "react";

function myhook(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((jsonres) => setData(jsonres[currency]));
  }, [currency]);

  return data;
}
export default myhook;



// import { useEffect, useState } from "react";

// function myhook(currency) {
//   const [data, setData] = useState(null); // Initialize with null
//   const [error, setError] = useState(null); // State for handling errors
//   const [loading, setLoading] = useState(false); // State for loading status

//   useEffect(() => {
//     if (!currency) return; // Exit if no currency is provided

//     setLoading(true);
//     setError(null); // Reset error for a new fetch

//     fetch(`/api/currencyInfo/${currency}`)
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error(`Failed to fetch: ${res.statusText}`);
//         }
//         return res.json();
//       })
//       .then((jsonRes) => setData(jsonRes))
//       .catch((err) => setError(err.message))
//       .finally(() => setLoading(false));
//   }, [currency]);

//   return { data, error, loading }; // Return all states for better usability
// }

// export default myhook;
