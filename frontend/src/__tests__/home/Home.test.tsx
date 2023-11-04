import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import { describe } from 'node:test';
import Home from '../../pages/Home';

describe('Home page', () => {
    it('should have a call-to-action button that says go to products', () => {
        render(<Home />);
        const button = screen.getByRole('button', {name: /Go to products/i});
        expect(button).toBeInTheDocument();
    })

   
})