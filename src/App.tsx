import React from 'react';
import './App.css';
import Menu from './components/Menu';
import Otrok from './components/Otrok';
import Noga from './components/Noga';
import Darilo from './components/Darilo';
import SeznamOtrok from './components/SeznamOtrok';
import SeznamDaril from './components/SeznamDaril';
import DodajOtroka from './components/DodajOtroka';
import DodajDarilo from './components/DodajDarilo';
import MiklavzInParkelj from './components/MiklavzInParkelj';
import NaloziSliko from './components/NaloziSliko';

import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';

interface Darilo {
  ime: string;
  opis: string;
  pridni: boolean;
  minStarost: number;
  maxStarost: number;
}

interface OtrokI {
  ime: string;
  starost: number;
  hisniNaslov: string;
  stPik: number;
  darila: Darilo[];
}

function App() {

  let darilo = [];
  darilo.push({ ime: "darilo1", opis: "opis1", pridni: true, minStarost: 3, maxStarost: 5});
  darilo.push({ ime: "darilo2", opis: "opis2", pridni: false, minStarost: 5, maxStarost: 10});
  darilo.push({ ime: "darilo3", opis: "opis3", pridni: true, minStarost: 7, maxStarost: 15});
  darilo.push({ ime: "darilo1", opis: "opis1", pridni: true, minStarost: 3, maxStarost: 5});
  darilo.push({ ime: "darilo2", opis: "opis2", pridni: false, minStarost: 5, maxStarost: 10});
  darilo.push({ ime: "darilo3", opis: "opis3", pridni: true, minStarost: 7, maxStarost: 15});

  const otrok = [];  
  otrok.push({ ime: "ime1", starost: 15, hisniNaslov: "ulica1", stPik: 1, darila: darilo});
  otrok.push({ ime: "ime2", starost: 5, hisniNaslov: "ulica2", stPik: 2, darila: darilo});

  const [otroci, setOtroci] = React.useState(otrok);
  const [darila, setDarila] = React.useState(darilo);

  const dodajDariloOtroku = (darilo: Darilo, id:number) => {
    let e = Array.from(otroci);
    e[id].darila.push(darilo);
    setOtroci(e);
  }

  const dodajOtroka = (otrok: OtrokI) => {
    let o = Array.from(otroci);
    o.push(otrok);
    setOtroci(o);
  }

  const dodajDarilo = (darilo: Darilo) => {
     let d = Array.from(darila);
     d.push(darilo);
     setDarila(d);
   }

  return (
    <Router>
      <div className="App">
      <ul>
        <li><a href="/"><b>DOMOV</b></a></li>
        <li><a href="/about"><b>O NAS</b></a></li>
        <li><a href="/seznamOtrok"><b>SEZNAM OTROK</b></a></li>
        <li><a href="/seznamDaril"><b>DARILA</b></a></li>
      </ul>
        <Switch>
          <Route exact path="/">
          <Menu naslov="Miklavž in parkelj"></Menu>
          </Route>
          <Route path="/about">
            <MiklavzInParkelj />
          </Route>
          <Route path="/seznamOtrok">
            <SeznamOtrok otrok={otroci} />
            <DodajOtroka dodajOtroka={dodajOtroka} />
          </Route>
          <Route path="/otrok/:id">
            <Otrok dodajDarilo={dodajDariloOtroku} otrok={otroci} />
          </Route>
          <Route path="/seznamDaril">
            <SeznamDaril darilo={darila}/>
            <DodajDarilo dodajDarilo={dodajDarilo} />
          </Route>
          <Route path="/darilo/:id">
            <Darilo darilo={darila}/>
          </Route>
          <Route path="/nalozi">
            <NaloziSliko />
          </Route>
          <Route path="/404">
            <h2>404 - Not found</h2>
            <div>Stran žal ne obstaja!</div>
          </Route>
          <Route path="*">
            <Redirect to="/404" />
          </Route>
        </Switch>
        <Noga></Noga>
      </div>
    </Router>

  );
}

export default App;
