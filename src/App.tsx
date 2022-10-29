import React from 'react';
import './App.css';
import Nav from './components/Nav'
import Menu from './components/Menu';
import Noga from './components/Noga';
import Darilo from './components/Darilo';
import SeznamOtrok from './components/SeznamOtrok';
import SeznamDaril from './components/SeznamDaril';
import DariloDodaj from './components/DariloDodaj';
import MiklavzInParkelj from './components/MiklavzInParkelj';
import OtrokMore from './components/OtrokMore';
import DariloMore from './components/DariloMore';
import SeznamZaDostavo from './components/SeznamZaDostavo';

import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';

interface Darilo1 {
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
  darila: Darilo1[];
}

interface Dostava {
  otr: Otrok;
  dar: Darilo1;
}

function App() {
  const [otroci, setOtroci] = React.useState<Otrok[]>([]);
  const [darila, setDarila] = React.useState<Darilo1[]>([]);
  const [zaDostavo, setZaDostavo] = React.useState<Dostava[]>([]);

  const handleMoreChangeOtroci = (o: Otrok[]) => {
    setOtroci(o);
  }

  const dodajOtroka = (otrok: Otrok) => {
    let o = Array.from(otroci);
    o.push(otrok);
    setOtroci(o);
  }

  const dodajDarilo = (darilo: Darilo1) => {
     let d = Array.from(darila);
     d.push(darilo);
     setDarila(d);
   }

   const dodajZaDostavo = (otrok: Otrok, darilo: Darilo1) => {
    let d = Array.from(zaDostavo);
    d.push({otr: otrok, dar: darilo})
    setZaDostavo(d);
  }

   const zbrisiDarilo = (darilo: Darilo1, id: number) => {
     let d = Array.from(darila);
     d.splice(id, 1);
     setDarila(d);
   }

   const urediDarilo = (darilo: Darilo1, id: number) => {
    let d = Array.from(darila);
    d.splice(id, 1);
    d.splice(id, 0, darilo); //da se nič ne izbriše - zato je nula
    setDarila(d);
  }

  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/">
          <Menu naslov="Miklavž in parkelj"></Menu>
          </Route>
          <Route path="/about">
            <MiklavzInParkelj />
          </Route>
          <Route exact path="/seznamOtrok">
            <SeznamOtrok onAdd={dodajOtroka} otroci={otroci} />
          </Route>
          <Route path="/otrok/:id">
            <OtrokMore otroci={otroci} darila={darila} onChange={handleMoreChangeOtroci} dodajDarilo={dodajZaDostavo} zbrisiDarilo={zbrisiDarilo} />
          </Route>
          <Route path="/seznamDaril">
            <SeznamDaril onAdd={dodajDarilo} darila={darila}/>
          </Route>
          <Route path="/darilo/:id">
            <DariloMore darila={darila} uredi={urediDarilo} />
          </Route>
          <Route path="/seznamZaDostavo">
            <SeznamZaDostavo zaDostavo={zaDostavo} />
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
