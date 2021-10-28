import axios from "axios";
import Button from '../common/Button';

const UpdateDb = () => {
    const saveVideoToDatabase = (event) => {
        event.preventDefault(); 
        axios.post('http://localhost:8000/uploadDatabase');
        console.log('Databasen uppdaterats')
    }
    return (
        <div className="save-video"> 
            <br /> 
            <Button onClick={saveVideoToDatabase}>Updatera WeeDo Databas</Button>
        </div>
    );
}
 
export default UpdateDb;