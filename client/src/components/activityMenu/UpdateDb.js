/**
 * Den här klassen skickar en post request till server för att
 * uppdatera weedos databas med den senaste inlag övningen på Youtube, 
 * dessutom har den gui komponent. 
 */
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