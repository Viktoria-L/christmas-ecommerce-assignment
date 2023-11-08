import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import { describe } from 'node:test';
import Home from '../../pages/Home';
import { MemoryRouter } from 'react-router-dom';

describe('Home page', () => {
    it('should have a call-to-action link that says enter candyland', () => {
        render(<MemoryRouter><Home /></MemoryRouter>);
        const link = screen.getByRole('link', {name: /Enter Candyland/i});
        expect(link).toBeInTheDocument();
    }) 
})
