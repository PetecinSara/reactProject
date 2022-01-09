import React from "react";
import './Menu.css';
interface MenuProps {
    naslov?: string;
}

function Menu(props:MenuProps) {
    return(
        <div>
        <h1>{props.naslov || "Naslov"}</h1>
        <p>Projektna naloga pri predmetu Ogrodja in orodja za razvoj spletnih rešitev.</p>
        </div>
        );
}

export default Menu;