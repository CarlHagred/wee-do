import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AdminLayout from "../../components/admin/AdminLayout";
import { getOnePatient } from "../../api";

const PatientStatistics = () => {
  const { name } = useParams();
  const [patient, setPatient] = useState([]);
  const [patientStatistics, setPatientStatistics] = useState([]);
  const breakEffect = true;

  useEffect(() => {
    const fetchData = async () => {
      const fetchedPatient = await getOnePatient(name);
      console.log(fetchedPatient.data.statistics);
      setPatient(fetchedPatient.data);
      setPatientStatistics(fetchedPatient.data.statistics);
    };
    fetchData();
  }, []);

  return (
    <AdminLayout>
      <h2>Statistik</h2>

      <p>Test för stats: namn {patient.name}</p>
      {patientStatistics.map((stat) => (
        <React.Fragment key={stat.vidId}>
          <br />
          <p>Video: {stat.vidId}</p>
          <p>Scans: {stat.scans}</p>
          <p>Antal visningar: {stat.timesWatched}</p>
          <br />
        </React.Fragment>
      ))}
    </AdminLayout>
  );
};
export default PatientStatistics;
