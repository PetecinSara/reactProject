import React from "react";
import { render, screen } from '@testing-library/react';
import Darilo from './Darilo';

test('render component', () => {
    render(<Darilo ime={'ime'} opis={"opis"} pridni={true} minStarost={5} maxStarost={10} slika={"slika"} />);
    const element = screen.getByTestId('test2');
    expect(element).toBeInTheDocument();
});
