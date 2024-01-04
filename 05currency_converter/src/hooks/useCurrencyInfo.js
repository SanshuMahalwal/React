import { useEffect, useState } from "react";

export default function useCurrencyInfo(currency) {

    const [data, setData] = useState({});
    const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;
  
    useEffect(()=>{
      fetch(url)
      .then(res => res.json())
      .then(data => setData(data[currency]));
    }, [currency])

    console.log(data);
    return data;
    
  }