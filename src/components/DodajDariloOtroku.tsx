import React, { FormEvent } from "react";

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

interface DodajDariloOtrokuProps {
    darilo: Darilo;
    otrok: Otrok;
    id: number;
    dodajDariloZaDostavo: (darilo: Darilo, otrok: Otrok) => any;
    zbrisiDarilo: (darilo: Darilo, id: number) => any;
}

function DodajDariloOtroku(props: DodajDariloOtrokuProps){
    
    const dodajDariloOtroku = (e: FormEvent) =>{
        e.preventDefault();
        props.dodajDariloZaDostavo(props.darilo, props.otrok);
        zbrisiDariloOtroku(e);
    }

    const zbrisiDariloOtroku = (e: FormEvent) =>{
        e.preventDefault();
        props.zbrisiDarilo(props.darilo, props.id);
    }

    return (
        <div>
            <button onClick={dodajDariloOtroku}>Dodaj otroku darilo</button>
        </div>
    ) 
}

export default DodajDariloOtroku;