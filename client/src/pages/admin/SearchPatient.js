import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { getAllPatients } from "../../api";

import AdminLayout from "../../components/admin/AdminLayout";
import SearchBar from "../../components/common/SearchBar";

const StyledTable = styled.table`
    caption-side: top;
    border-collapse: separate;
    border-spacing: 5px;
    width: 100%;
    margin: 1em 0;
    justify-content: left;
    border-radius: 4px;

    td,
    th {
        padding: 5px 10px;
        border-radius: 4px;
        font-family: "Roboto", sans-serif;
        font-size: 1em;
        text-align: left;
    }

    tbody tr {
        :nth-of-type(odd) {
            background-color: rgb(247, 247, 248, 100%);
        }
        :nth-of-type(even) {
            background-color: rgb(247, 247, 248, 100%);
        }
        :hover {
            filter: brightness(130%);
            background-color: ${(props) => props.theme.palette.hover};
        }
    }
    thead td {
        background-color: #c2c2c2;
        border-radius: 4px;
        font-size: 1.2em;
    }
`;

const SearchPatient = () => {
    const [patients, setPatients] = useState([]);
    const [searchedName, setSearchedName] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const allPatients = await getAllPatients();
            setPatients(allPatients.data);
        };
        fetchData();
    }, []);
    return (
        <AdminLayout>
            <SearchBar
                placeholder="Sök efter en patient... "
                onChange={(e) => {
                    setSearchedName(e.target.value);
                }}
            />
            <StyledTable>
                <colgroup>
                    <col />
                </colgroup>
                <thead>
                    <tr>
                        <td>Patient-id:</td>
                    </tr>
                </thead>
                {patients
                    .filter((patient) => {
                        return patient.name.includes(searchedName)
                            ? patient
                            : null;
                    })
                    .map((patient) => (
                        <tbody>
                            <tr key={patient._id}>
                                <td>
                                    <Link
                                        to={`/admin/statistics/${patient.name}`}
                                        key={patient._id}
                                    >
                                        {patient.name}
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    ))}
            </StyledTable>
        </AdminLayout>
    );
};

export default SearchPatient;
