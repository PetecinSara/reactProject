import React from 'react';

interface Darilo {
        ime: string;
        pridni: boolean;
        minStarost: number;
        maxStarost: number;
        slika: string;
}
interface OtrokProps {
    id: number;
    ime: string;
    starost: number;
    hisniNaslov: string;
    stPik: number;
    darila: Darilo[];
}

function Otrok(props: OtrokProps) {
    return <li>{props.ime} število pik: {props.stPik}</li>;
}

export default Otrok;