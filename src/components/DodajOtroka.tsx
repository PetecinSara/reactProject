import React, { ChangeEvent, FormEvent } from 'react';

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

interface DodajOtrokaProps {
    dodajOtroka: (otrok: Otrok) => any;
}

function DodajOtroka(props: DodajOtrokaProps) {
    
    const [ime, setIme] = React.useState<string>("");
    const [starost, setStarost] = React.useState<number>(0);
    const [hisniNaslov, setHisniNaslov] = React.useState<string>("");
    const [stPik, setStPik] = React.useState<number>(0);

    const vnosIme = (e: ChangeEvent<HTMLInputElement>) => {
        setIme(e.target.value);
        }
    
    const vnosStarost = (e: ChangeEvent<HTMLInputElement>) => {
        setStarost(Number(e.target.value));
        }

    const vnosHisniNaslov = (e: ChangeEvent<HTMLInputElement>) => {
        setHisniNaslov(e.target.value);
        }

    const vnosStPik = (e: ChangeEvent<HTMLInputElement>) => {
        setStPik(Number(e.target.value));
        }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        props.dodajOtroka({ime: ime, starost: starost, hisniNaslov: hisniNaslov, stPik: stPik, darila:[]});
        }
   
    return (
        <form onSubmit = {handleSubmit}>
            <h3><b>Dodaj otroka:</b></h3>
            <label>Ime:
                <input
                    type="text"
                    value={ime}
                    onChange={vnosIme}
                    />
            </label>
            <br />
            <label>Starost:
                <input
                    type="number"
                    value={starost}
                    onChange={vnosStarost}
                    />
            </label>
            <br />
            <label>Hišni naslov:
                <input
                    type="text"
                    value={hisniNaslov}
                    onChange={vnosHisniNaslov}
                    />
            </label>
            <br />
            <label>Število črnih pik:
                <input
                    type="number"
                    value={stPik}
                    onChange={vnosStPik}
                    />
            </label>
            <br />
            <br />
            <input type="submit" value="dodaj" />
        </form>
    );
}


export default DodajOtroka;