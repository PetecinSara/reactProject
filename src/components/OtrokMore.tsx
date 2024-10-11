import React from "react";
import Darilo1 from "./Darilo";
import DodajDariloOtroku from "./DodajDariloOtroku";

import { useParams } from 'react-router-dom';

interface Darilo {
    ime: string;
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

interface OtrokProps {
    otroci: Otrok[];
    darila : Darilo[];
    onChange: (otroci: Otrok[]) => any;
    dodajDarilo: (otrok:Otrok, darilo: Darilo) => any;
}

function OtrokMore(props: OtrokProps){
    const {id} : any = useParams();
    const { darila } = props;

    const [otrok, setOtrok] = React.useState<Otrok>(props.otroci[id]);

    const dodajDariloZaDostavo = (darilo: Darilo, otrok: Otrok) =>{
        props.dodajDarilo(otrok, darilo);
    }

    const handleElementClick = (newStPik : number) => {
        let o = { ...otrok };
        o.stPik = newStPik;
        setOtrok(o);
        let novoPolje = props.otroci;
        novoPolje[id] = o;
        props.onChange(novoPolje);
    }

    function dodajPike(o : Otrok) {
        let pike = o.stPik+1;
        handleElementClick(pike);
    } 

    function odvzemPik(o : Otrok) {
        let pike = o.stPik-1;
        handleElementClick(pike);
    } 



    return (
        <div>
            <h1>{otrok.ime}</h1>
            <div>Starost: <b>{otrok.starost}</b></div>
            <div>Hišni naslov: <b>{otrok.hisniNaslov}</b></div>
            <div>Število pik: <b>{otrok.stPik}</b> <button onClick={() => dodajPike(otrok)}>+</button> <button onClick={() => odvzemPik(otrok)}>-</button></div>
            <div>
            <ul>
                {darila.filter(o => (o.minStarost<=otrok.starost) && (otrok.starost<= o.maxStarost) && 
                ((o.pridni === true && otrok.stPik < 5)|| (o.pridni === false && otrok.stPik >= 5))
                ).map((e, i) => (
                <div><Darilo1 ime={e.ime} pridni={e.pridni} minStarost={e.minStarost} maxStarost={e.maxStarost} slika={e.slika} /><br />
                <DodajDariloOtroku darilo={e} otrok={otrok} id={i} dodajDariloZaDostavo={dodajDariloZaDostavo} />
                </div>
                ))}
            </ul>
            </div>
        </div>
    ) 
}

export default OtrokMore;