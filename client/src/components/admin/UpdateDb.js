/**
 * Den här klassen skickar en post request till server för att
 * uppdatera weedos databas med den senaste inlag övningen på Youtube,
 * dessutom har den gui komponent.
 */
import axios from "axios";
import Button from "../common/Button";

const UpdateDb = () => {
  const saveVideoToDatabase = (event) => {
    event.preventDefault();
    axios.post("/updateDatabase");
    console.log("Databasen uppdaterats");
  };
  return (
    <div className="save-video">
      <br />
      <Button onClick={saveVideoToDatabase}>Uppdatera Databas</Button>
    </div>
  );
};

export default UpdateDb;
