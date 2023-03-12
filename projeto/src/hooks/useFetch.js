import React, { useEffect, useState } from "react";
import axios from 'axios'
export default function useFetch(url) {
    const [response, setResponse] = useState([])
  const fetchData = async (url) => {
    try {
      const res = await axios.get(url);
      setResponse(await res.data.payload);
    
    } catch (error) {
      console.log("erro na requisao do estados");
    }
  };
  useEffect(() => {
    fetchData(url);
  }, []);

  return [response,fetchData];
}
