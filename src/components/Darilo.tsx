import React from "react";
import { useParams, Link } from 'react-router-dom';

interface DariloProps {
    ime: string;
    opis: string;
    pridni: boolean;
    minStarost: number;
    maxStarost: number;
}

interface SeznamDaril {
    darilo : DariloProps[];
}

function Darilo(props: SeznamDaril) {
    const {id} : any = useParams();

    return (
        <div>   
            <h1>{props.darilo[id].ime}</h1>
            <div>Opis: <b>{props.darilo[id].opis}</b></div>
            <div>Ali je za pridne: <b>{props.darilo[id].pridni}</b></div>
            <div>Najmanjša dovoljena starost: <b>{props.darilo[id].minStarost}</b></div>
            <div>Največja dovoljena starost: <b>{props.darilo[id].maxStarost}</b></div>
        </div>
    );
}

export default Darilo;