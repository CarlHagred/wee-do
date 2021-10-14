import React from "react";
import { Link } from "react-router-dom";

const Help = () => {
    return ( <
        div >
        <
        h2 > Help < /h2> <
        h3 > Vad behlver du hjälp med ? < /h3> <
        ul >
        <
        Link to = "/" > Tillbaka till förstasidan < /Link> <
        /ul> <
        /div>
    );
};
export default Help;