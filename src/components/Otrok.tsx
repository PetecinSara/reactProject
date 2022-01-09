import React from "react";

import { useParams } from 'react-router-dom';

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

interface SeznamOtrok {
    otrok : Otrok[];
    dodajDarilo: (darilo: Darilo, id: number) => any
}
function Otrok1(props: Otrok){
    const [otrok, setOtrok] = React.useState(props);
    const updateOtrok = (newStPik : number) => {
        setOtrok(previousState => {
          return { ...previousState, stPik: newStPik}
        });
      }

      function dodajPike(o : Otrok) {
        let pike = o.stPik+1;
        updateOtrok(pike);
        alert("Dodajam" + pike);
    } 

    function odvzemPik(o : Otrok) {
        let pike = o.stPik-1;
        updateOtrok(pike);
        alert("Odvzemam" + pike);
    } 

    return (
        <div>
            <h1>{otrok.ime}</h1>
            <div>Starost: <b>{otrok.starost}</b></div>
            <div>Hišni naslov: <b>{otrok.hisniNaslov}</b></div>
            <div>Število pik: <b>{otrok.stPik}</b>  <button onClick={() => dodajPike(otrok)}>+</button> <button onClick={() => odvzemPik(otrok)}>-</button></div>
        </div>
    ) 
}

function Otrok(props: SeznamOtrok) {
   
    const {id} : any = useParams();
    const [otrok, setOtrok] = React.useState(props.otrok[id]);
    
      const updateOtrok = (newStPik : number) => {
        setOtrok(previousState => {
          return { ...previousState, stPik: newStPik}
        });
      }

    const [stevec, setStevec] = React.useState(0);

    const handleAdd = (darilo: Darilo) => {
        props.dodajDarilo(darilo, id);
    }

    React.useEffect(() => {
        setStevec(props.otrok[id].darila.length);
    });

    const [stPik, setStPike] = React.useState(0);

    const updateStPik=(value : number)=> {
        setStPike(value);
      };

    function dodajPike(o : Otrok) {
        let pike = o.stPik+1;
        updateOtrok(pike);
        alert("Dodajam" + pike);
    } 

    function odvzemPik(e : Otrok) {
        alert("Odvzemam" + (e.stPik-1));
    } 
   

    
    return (
        <div>
            <h1>{props.otrok[id].ime}</h1>
            <div>Starost: <b>{ props.otrok[id].starost}</b></div>
            <div>Hišni naslov: <b>{ props.otrok[id].hisniNaslov}</b></div>
            <div>Število pik: <b>{ otrok.stPik}</b> <button onClick={() => dodajPike(props.otrok[id])}>+</button> <button onClick={() => odvzemPik(props.otrok[id])}>-</button></div>
            <p>Darila:</p>
            <h3>Število daril: {stevec}</h3>
            <Otrok1 ime={props.otrok[id].ime} starost={props.otrok[id].starost} hisniNaslov={props.otrok[id].hisniNaslov} stPik={props.otrok[id].stPik} darila={props.otrok[id].darila}></Otrok1>
        </div>
    )
}

export default Otrok;