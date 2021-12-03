import Button from '../common/Button';
import {updateDatabase} from "../../api/index.js"; 

const UpdateDb = () => {
    const saveVideoToDatabase = (event) => {
        event.preventDefault(); 
        updateDatabase(); 
        console.log('Databasen uppdaterats')
    }
    return (
        <div className="save-video"> 
            <br /> 
            <Button onClick={(e) => {saveVideoToDatabase(e)}}>Uppdatera Databas</Button>
        </div>
    );
};
export default UpdateDb;