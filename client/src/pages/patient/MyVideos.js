import { useEffect, useState } from "react";
import { getSession, getMyVideos } from "../../api/index";

const MyVideos = () => {
    const [patientName, SetPatientName] = useState(""); 
    //const [myVideos, setMyVideos] = useState([]); 

    useEffect(() => {
        const fetchData = async () => {        
            await getSession().then(res => {
                SetPatientName(res.data.name);
            });
        }
        fetchData();   
    }, []); 

    const handleClick = () => {
        console.log('name: ', patientName); 
        const params = { name: patientName};
        getMyVideos(params).then(res => {
            console.log('videos: ', res.data); 
        }); 
    };


    return (
        <div>
            <button onClick={() => handleClick()}>Mina övningar</button>
        </div>
    );
}
 
export default MyVideos;