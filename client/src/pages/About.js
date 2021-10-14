import React from "react";
import { Link } from "react-router-dom";

const About = () => {
    return ( <
        div >
        <
        h2 > About < /h2> <
        h3 > WeeDo är ett sammarbete mellan Region Skåne och Malmö Universitet. < /h3> <
        ul >
        <
        Link to = "/" > Tillbaka till förstasidan < /Link> <
        /ul> <
        /div>
    );
};
export default About;