import { useEffect, useState } from "react";
import { getSession, getMyVideos } from "../../api/index";

const MyVideos = () => {
    const [patientName, SetPatientName] = useState(null); 
    //const [myVideos, setMyVideos] = useState([]); 

    // const sleep = msec => {
    //     return new Promise(resolve => setTimeout(resolve, msec)); 
    // }; 

    // const fetchData = async () => {
    //     const res = await getSession();
    //     SetPatientName(res.data.name); 
    //     const params = { name: patientName};
    //     const videos =  getMyVideos(params); 
    // }
    // fetchData();

    useEffect(() => {
        const fetchData = async () => {
            const res = await getSession();
            SetPatientName(res.data.name);
        }
        fetchData(); 
    }, []); 

    const params = { name: patientName};
    const videos =  getMyVideos(params);

    // const sleep = msec => {
    //     return new Promise(resolve => setTimeout(resolve, msec)); 
    // }; 
    
    // sleep(1000).then(() => {
    //     const params = { name: patientName};
    //     const videos = getMyVideos(params);
    //     console.log(videos);
    // });

    // useEffect(() => {
    //     const params = { name: patientName};
    //     const fetchVideos = () => {
    //         const videos = getMyVideos(params);
    //         console.log(videos);
    //     }
    //     fetchVideos();          
    // }, [])
    

   
    
    
    // const videos = async () => {
       
    // }; 
    // videos(); 
     
    


    return (
        <div>
            <h1>{patientName}</h1>
        </div>
    );
}
 
export default MyVideos;