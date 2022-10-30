import React, { ChangeEvent, FormEvent } from "react";

import { useParams } from 'react-router-dom';

interface Darilo {
    ime: string;
    opis: string;
    pridni: boolean;
    minStarost: number;
    maxStarost: number;
    slika: string;
}

interface DariloProps {
    darila: Darilo[];
    uredi: (darilo: Darilo, id: number) => any;
}

function DariloMore(props: DariloProps){
    const {id} : any = useParams();
    const [darilo, setDarilo] = React.useState<Darilo>(props.darila[id]);

    const [ime, setIme] = React.useState<string>("");
    const [opis, setOpis] = React.useState<string>("");
    const [pridni, setPridni] = React.useState<boolean>(true);
    const [minStarost, setMinStarost] = React.useState<number>(1);
    const [maxStarost, setMaxStarost] = React.useState<number>(80);
    const [slika, setSlika] = React.useState<string>("");

    const vnosIme = (e: ChangeEvent<HTMLInputElement>) => {
        setIme(e.target.value);
        }

    const vnosOpis = (e: ChangeEvent<HTMLInputElement>) => {
        setOpis(e.target.value);
        }
    
    const vnosPridni = (e: ChangeEvent<HTMLInputElement>) => {
        setPridni(!pridni);
        }

    const vnosMinStarost = (e: ChangeEvent<HTMLInputElement>) => {
        setMinStarost(Number(e.target.value));
        }

    const vnosMaxStarost = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxStarost(Number(e.target.value));
        }
        
    const vnosSlika = (e: ChangeEvent<HTMLInputElement>) => {
        setSlika(e.target.value);
        }


    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        props.uredi({ime: ime, opis: opis, pridni: pridni, minStarost: minStarost, maxStarost: maxStarost, slika: slika}, id);
        }

    return (
        <div>
            <h1>{props.darila[id].ime}</h1>
            <div>Opis: <b>{props.darila[id].opis}</b></div>
            <div>Ali je za pridne: <b>{props.darila[id].pridni ? "DA" : "NE"}</b></div>
            <div>Najmanjša dovoljena starost: <b>{props.darila[id].minStarost}</b></div>
            <div>Največja dovoljena starost: <b>{props.darila[id].maxStarost}</b></div>
            <div><img src={props.darila[id].slika}></img></div>  
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
                    value={"1"}
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
            <label>Link do slike:
                <input
                    type="text"
                    value={slika}
                    onChange={vnosSlika}
                    />
            </label>
            <br />
            <input type="submit" value="Uredi" />
        </form>      
        </div>
    ) 
}

export default DariloMore;