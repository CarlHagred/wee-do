import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer.js"

const MainPage = () => {
    return ( <
        div >
        <
        h2 > WeeDo förstassida < /h2> <
        ul >
        <
        Link to = "/activities" > Activities < /Link> <
        /ul> <
        ul >
        <
        Link to = "/exercises" > Exercises < /Link> <
        /ul> <
        ul >
        <
        Link to = "/scanner" > Scanner < /Link> <
        /ul> <
        Footer / >
        <
        /div>
    );
};
export default MainPage;