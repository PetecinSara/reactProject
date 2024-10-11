import React from "react";
import { fireEvent, render, screen } from '@testing-library/react';
import DariloDodaj from './DariloDodaj';
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({
        id: '0'
    })
}));
test('gumb dodaj darilo', () => {
    const handleAdd = jest.fn();
    const utils = render(<DariloDodaj id={0} onAdd={handleAdd} />);
    const inputIme = utils.getByLabelText(/Ime:/i);
    fireEvent.change(inputIme, {target: {value: 'test ime'}});
    const inputPridni = utils.getByLabelText(/Pridni:/i);
    fireEvent.change(inputPridni, {target: {value: '1'}});
    const inputMinStar = utils.getByLabelText(/Minimalna starost:/i);
    fireEvent.change(inputMinStar, {target: {value: '10'}});
    const inputMaxStar = utils.getByLabelText(/Maksimalna starost:/i);
    fireEvent.change(inputMaxStar, {target: {value: '100'}});
    const inputLink = utils.getByLabelText(/Link do slike:/i);
    fireEvent.change(inputLink, {target: {value: 'linkdoslike.jpg'}});
    fireEvent.click(screen.getByText(/dodaj/i));
    expect(handleAdd).toHaveBeenCalledWith({ ime: 'test ime', pridni: true, minStarost: 10, maxStarost: 100, slika: 'linkdoslike.jpg'});
    });