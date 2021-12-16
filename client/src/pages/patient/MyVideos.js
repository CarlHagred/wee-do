import { useEffect, useState } from "react";
import { getSession, getMyVideos } from "../../api/index";
import PatientLayout from "../../components/patient/PatientLayout"; 


const MyVideos = () => { 
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

    const videos = JSON.stringify(myVideos.data);
    console.log(myVideos.data); 
    
    return (
        <PatientLayout>
            <h1>Mina övningar</h1>
            <div>Is Loading: {isLoading.toString()}</div>
            <div>{videos}</div>
            <div>Is Error: {isError.toString()}</div>
        </PatientLayout>
    );
}
 
export default MyVideos;