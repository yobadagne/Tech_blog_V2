import { useEffect, useState } from "react"
const fetch = require("node-fetch");
// import fetch from "node-fetch";
const useFetch = (url) => {
  
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    try {
        useEffect(() => {
             fetch(url)
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    // console.log(data);
                    setLoading(false);
                });
            //  setData(["chaltu","chebude"]);
            //  console.log(data);
            //  setLoading(false)
        
        },[]);
    } catch (error) {
        console.log(error);
    }

    return {data, loading};
    // const data = fetch('http://localhost:8000/home').then(res => res.json()).then(data => {return data})
    
}

export default useFetch