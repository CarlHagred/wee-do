import axios from "axios";
import '../styled/SaveVideo.css';
const UpdateDb = () => {
    const saveVideoToDatabase = (event) => {
        event.preventDefault(); 
        axios.post('http://localhost:8000/uploadDatabase');
        console.log('Databasen uppdaterats')
    }
    return (
        <div className="save-video"> 
            <br /> 
            <br />          
            <button onClick={saveVideoToDatabase} id="save-video-in-db">Updatera WeeDo Databas</button>
        </div>
    );
}
 
export default UpdateDb;