import React from "react";
import { Link } from 'react-router-dom';
import './Menu.css';

interface Darilo {
    ime: string;
    opis: string;
    pridni: boolean;
    minStarost: number;
    maxStarost: number;
}

interface Otrok {
    ime: string;
    starost: number;
    hisniNaslov: string;
    stPik: number;
    darila: Darilo[];
}

interface SeznamOtrokProps {
    otrok : Otrok[];
}

function SeznamOtrok(props: SeznamOtrokProps) {

    React.useEffect(() => {
        document.title = "Seznam otrok";
    })
    
    const { otrok } = props;

    return (
        <div>
            <h1>Seznam otrok</h1>
            <div>
            <h3>Pridni otroci</h3>
                {otrok.filter(opt => opt.stPik >= 5).map((e, i) => (
                    <Link to={`/otrok/` + i}><p key={i}>{e.ime} {e.stPik} </p></Link>
                    ))}
            <h3>Poredni otroci</h3>
                {otrok.filter(opt => opt.stPik < 5).map((e, i) => (
                    <Link to={`/otrok/` + i}><p key={i}>{e.ime} {e.stPik} </p></Link>))}
            </div>
        </div>
    )
}

export default SeznamOtrok;