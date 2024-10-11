import React from "react";

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

interface Dostava {
    otr: Otrok;
    dar: Darilo;
}

interface SeznamZaDostavoProps {
    zaDostavo: Dostava[];
}

function SeznamZaDostavo(props: SeznamZaDostavoProps){


    return (
        <div>
            <h3>Seznam za dostavo</h3>
            <ul>
                {props.zaDostavo.map((e) => (
                    <p><li>Ime otroka: {e.otr.ime} darilo: {e.dar.ime}</li><br /></p>
                    ))}
            </ul>
        </div>
    ) 
}

export default SeznamZaDostavo;