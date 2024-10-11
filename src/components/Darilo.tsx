import React from "react";
interface DariloProps {
    ime: string;
    pridni: boolean;
    minStarost: number;
    maxStarost: number;
    slika: string;
}

function Darilo(props: DariloProps) {
    return <li data-testid="test2">{props.ime}</li>;
}

export default Darilo;