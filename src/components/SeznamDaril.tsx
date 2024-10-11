import React from "react";
import Darilo1 from "./Darilo";
import DodajDarilo from "./DariloDodaj";
import './Menu.css';
import { Link } from 'react-router-dom';

interface Darilo {
    ime: string;
    pridni: boolean;
    minStarost: number;
    maxStarost: number;
    slika: string;
}

interface SeznamDarilProps {
    darila : Darilo[];
    onAdd: (darilo: Darilo) => any
}

function SeznamDaril(props: SeznamDarilProps) {
   
    const { darila } = props;

    const handleAdd = (darilo: Darilo) => {
        props.onAdd(darilo);
    }

    React.useEffect(() => {
        document.title = "Seznam daril";
    }, [darila])

    return (
        <div>
            <h1>Seznam daril</h1>
            <ul>
                {darila.map((e, i) => (
                    <Link key={i} to={`/darilo/${i}`}><Darilo1 ime={e.ime} pridni={e.pridni} minStarost={e.minStarost} maxStarost={e.maxStarost} slika={e.slika} /><br /></Link>
                    ))}
            </ul>
            <div>
                <DodajDarilo id={darila.length} onAdd={handleAdd} />
            </div>
        </div>
    )
}

export default SeznamDaril;