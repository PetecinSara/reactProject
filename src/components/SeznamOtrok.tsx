import React from "react";
import Otrok from "./Otrok";
import DodajOtroka from './DodajOtroka';

import { Link } from 'react-router-dom';
import './Menu.css';
interface Darilo {
    ime: string;
    opis: string;
    pridni: boolean;
    minStarost: number;
    maxStarost: number;
    slika: string;
}
interface Otrok {
    id: number;
    ime: string;
    starost: number;
    hisniNaslov: string;
    stPik: number;
    darila: Darilo[];
}

interface SeznamOtrokProps {
    otroci : Otrok[];
    onAdd: (otrok: Otrok) => any
}

function SeznamOtrok(props: SeznamOtrokProps) {
    const { otroci } = props;
    
    const handleAdd = (otrok: Otrok) => {
        props.onAdd(otrok);
    }

    React.useEffect(() => {
        document.title = "Seznam otrok";
    }, [otroci])

    return (
        <div>
            <h1>Seznam otrok</h1>
            <div>
            <h3>Pridni otroci</h3>
            <ul>
                {otroci.filter(o => o.stPik >= 5).map((e, i) => (
                    <Link key={i} to={`/otrok/${e.id}`}><Otrok id={e.id} ime={e.ime} starost={e.starost} hisniNaslov={e.hisniNaslov} stPik={e.stPik} darila={e.darila} /><br /></Link>
                    ))}
            </ul>
            <h3>Poredni otroci</h3>
            <ul>
                {otroci.filter(o => o.stPik < 5).map((e, i) => (
                    <Link key={i} to={`/otrok/${e.id}`}><Otrok id={e.id} ime={e.ime} starost={e.starost} hisniNaslov={e.hisniNaslov} stPik={e.stPik} darila={e.darila} /><br /></Link>
                    ))}
            </ul>
            </div>
            <div>
            <DodajOtroka id={otroci.length} onAdd={handleAdd} />
            </div>
        </div>
    )
}

export default SeznamOtrok;