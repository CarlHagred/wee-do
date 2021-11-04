import { useState, useEffect } from "react";
/**This class will be the custom hook for fetching json data from whatever url, doesn't matter. 
 * It returns the data as json object, it is a custom fetch hook*/
const UseFetch = (url) => {
    
    const [data, setData] = useState(null); 
    const [isPending, setIsPending] = useState(true); 
    const [error, setError] = useState(null); 

    useEffect(() => {
        setTimeout (() =>{
            fetch(url).then(res => {
                if(!res.ok){
                    setError('Could not fetch the data from that resource'); 
                    throw Error(error); 
                }
                return res.json(); 
            }).then((data) =>{
                console.log('The data recieved from the resource is as follow:\n'+data); 
                setData(data); 
                setIsPending(false); 
                setError(null);
            }).catch(err =>{
                setIsPending(false); 
                setError(err.message); 
            })
        }, 500); 
    }, [url]); 

    return {data, isPending, error}; 
}
export default UseFetch; 