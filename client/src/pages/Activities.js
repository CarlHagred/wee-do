import React from 'react';
import { Link } from 'react-router-dom';
import RegisterPatient from '../components/activityMenu/RegisterPatient';
import SearchPatient from '../components/activityMenu/SearchPatient';

const Activities = () => {
  return (
    <div>
      <h2>Login succeeded</h2>
      <br />
      <h3>Aktivitetspanel</h3>
      <br />
      <RegisterPatient />
      <hr />
      <SearchPatient />
      <hr />
      <ul>
        <Link to="/">Tillbaka till förstasidan</Link>
      </ul>
    </div>
  );
};
export default Activities;
