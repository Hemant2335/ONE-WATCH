import { useEffect , useState } from "react";

const useFetch = (url) =>{
    const [data, setdata] = useState(null)
    const [loading, setloading] = useState(null)
    const [error, seterror] = useState(null)

    const apidata = async(url)=>{
        try {
            const urli = url;
        const data = await fetch(urli);
        const parseddata = await data.json();
        setloading(false)
        setdata(parseddata);
            
        } catch (error) {
            setloading("false");
            seterror("Something Went Wrong");                
        }
        

      }

    useEffect(()=>{
        setloading("loading");
        setdata(null);
        seterror(null);
        apidata(url)

    },[url])

    return {data , loading , error};
}

export default useFetch;