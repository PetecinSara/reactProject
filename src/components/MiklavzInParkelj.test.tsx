import React from "react";
import { render, screen } from '@testing-library/react';
import MiklavzInParkelj from './MiklavzInParkelj';

test('render component', () => {
    render(<MiklavzInParkelj/>);
    const element = screen.getByTestId('test1');
    expect(element).toBeInTheDocument();
});

