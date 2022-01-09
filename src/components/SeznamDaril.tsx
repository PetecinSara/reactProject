import React from "react";
import './Menu.css';
import { Link } from 'react-router-dom';


interface Darilo {
    ime: string;
    opis: string;
    pridni: boolean;
    minStarost: number;
    maxStarost: number;
}

interface SeznamDarilProps {
    darilo : Darilo[];
}

function SeznamDaril(props: SeznamDarilProps) {
   
    const { darilo } = props;

    return (
        <div>
            <h1>Seznam daril</h1>
            {darilo.map((e, i) => (
                <Link to={`/darilo/` + i}><p key={i}>{e.ime}</p></Link>))}
        </div>
    )
}

export default SeznamDaril;