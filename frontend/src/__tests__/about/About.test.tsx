import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import About from '../../pages/About';

describe('Testing the about page', () => {

    it('should have a title stating "about us"', () => {
        render(<About />)
        const heading = screen.getByRole('heading', { name: 'About us' });
        expect(heading).toBeInTheDocument();
    })
 })