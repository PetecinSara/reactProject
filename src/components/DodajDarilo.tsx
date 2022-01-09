import React, { ChangeEvent, FormEvent } from "react";
import Darilo from "./Darilo";

interface Darilo {
    ime: string;
    opis: string;
    pridni: boolean;
    minStarost: number;
    maxStarost: number;
}

interface DodajDarilo {
    dodajDarilo: (darilo: Darilo) => any;
}

function DodajDarilo(props: DodajDarilo) {
    
    const [ime, setIme] = React.useState<string>("");
    const [opis, setOpis] = React.useState<string>("");
    const [pridni, setPridni] = React.useState<boolean>(true);
    const [minStarost, setMinStarost] = React.useState<number>(1);
    const [maxStarost, setMaxStarost] = React.useState<number>(80);

    const vnosIme = (e: ChangeEvent<HTMLInputElement>) => {
        setIme(e.target.value);
        }

    const vnosOpis = (e: ChangeEvent<HTMLInputElement>) => {
        setOpis(e.target.value);
        }
    
    const vnosPridni = (e: ChangeEvent<HTMLInputElement>) => {
        setPridni(pridni);
        }

    const vnosMinStarost = (e: ChangeEvent<HTMLInputElement>) => {
        setMinStarost(Number(e.target.value));
        }

    const vnosMaxStarost = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxStarost(Number(e.target.value));
        }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        props.dodajDarilo({ime: ime, opis: opis, pridni: pridni, minStarost: minStarost, maxStarost: maxStarost});
        }
   
    return (
        <form onSubmit = {handleSubmit}>
            <h3><b>Dodaj darilo:</b></h3>
            <label>Ime:
                <input
                    type="text"
                    value={ime}
                    onChange={vnosIme}
                    />
            </label>
            <br />
            <label>Opis:
                <input
                    type="text"
                    value={opis}
                    onChange={vnosOpis}
                    />
            </label>
            <br />
            <label>Pridni:
                <div onChange={vnosPridni}>
                <input
                    type="checkbox"
                    value="0"
                    checked={pridni}
                    />
                </div>
            </label>
            <br />
            <label>Minimalna starost:
                <input
                    type="number"
                    value={minStarost}
                    onChange={vnosMinStarost}
                    />
            </label>
            <br />
            <label>Maksimalna starost:
                <input
                    type="number"
                    value={maxStarost}
                    onChange={vnosMaxStarost}
                    />
            </label>
            <br />
            <input type="submit" value="dodaj" />
        </form>
    );
}

export default DodajDarilo;