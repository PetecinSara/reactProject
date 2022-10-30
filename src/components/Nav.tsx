import React from "react";
import './Nav.css';

import { Link } from 'react-router-dom';

function Nav() {
    return(
        <ul>
            <Link to={`/`}><li><a><b>DOMOV</b></a></li></Link>
            <Link to={`/about`}><li><a><b>O NAS</b></a></li></Link>
            <Link to={`/seznamOtrok`}><li><a><b>SEZNAM OTROK</b></a></li></Link>
            <Link to={`/seznamDaril`}><li><a><b>DARILA</b></a></li></Link>
            <Link to={`/seznamZaDostavo`}><li><a><b>SEZNAM ZA DOSTAVO</b></a></li></Link>
        </ul>
    );
}

export default Nav;