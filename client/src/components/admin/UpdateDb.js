import Button from '../common/Button';
import {updateDatabase} from "../../api/index.js"; 

const UpdateDb = () => {
    const saveVideoToDatabase = () => {
        updateDatabase(); 
    }
    return (
        <div className="save-video"> 
            <br /> 
            <Button onClick={saveVideoToDatabase}>Uppdatera Databas</Button>
        </div>
    );
}
export default UpdateDb;