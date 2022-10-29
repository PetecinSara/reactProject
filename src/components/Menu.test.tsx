import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Menu from './Menu'

afterEach(cleanup);

  it('render title', () => {
    const { getByTestId } = render(<Menu />); 
    expect(getByTestId('testNaslov')).toHaveTextContent("Naslov");
   });