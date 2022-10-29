import React from "react";
import { fireEvent, render, screen } from '@testing-library/react';
import DodajOtroka from './DodajOtroka';

test('gumb dodaj otroka', () => {
    const handleAdd = jest.fn();
    const utils = render(<DodajOtroka id={0} onAdd={handleAdd} />);
    const inputIme = utils.getByLabelText(/Ime:/i);
    fireEvent.change(inputIme, {target: {value: 'test ime'}});
    const inputStarost = utils.getByLabelText(/Starost:/i);
    fireEvent.change(inputStarost, {target: {value: '0'}});
    const inputHisniNaslov = utils.getByLabelText(/Hišni naslov:/i);
    fireEvent.change(inputHisniNaslov, {target: {value: 'ulica 100'}});
    const inputStPik = utils.getByLabelText(/Število črnih pik:/i);
    fireEvent.change(inputStPik, {target: {value: '10'}});
    fireEvent.click(screen.getByText(/dodaj/i));
    expect(handleAdd).toHaveBeenCalledWith({ id: 0, ime: 'test ime', starost: 0, hisniNaslov: 'ulica 100', stPik: 10, darila: [] });
    });
