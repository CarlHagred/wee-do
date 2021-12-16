import { useEffect, useState } from "react";
import { getSession, getMyVideos } from "../../api/index";

const MyVideos = () => {
    //const [patientName, SetPatientName] = useState(""); 
    const [myVideos, setMyVideos] = useState([]); 
    const [isError, setIsError] = useState(false); 
    const [isLoading, setIsLoading] = useState(true); 


    useEffect(() => {
        const fetchData = async () => {        
           try{
                const data = await getSession();
                const name = data.data.name; 
                const params = { name: name};
                const videoData = await getMyVideos(params); 
                setMyVideos(videoData); 
           }catch {
               setIsError(true); 
           }
           setIsLoading(false); 
        }
        fetchData();   
    }, []); 

    return (
        <div>
            <h1>Mina övningar</h1>
            <div>Is Loading: {isLoading.toString()}</div>
            <div>{JSON.stringify(myVideos)}</div>
            <div>Is Error: {isError.toString()}</div>
        </div>
    );
}
 
export default MyVideos;