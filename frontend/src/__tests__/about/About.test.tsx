import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import About from '../../pages/About';

describe('Testing the about page', () => {

    it('should have a title stating "about us"', () => {
        render(<About />)
        const heading: HTMLElement = screen.getByRole('heading', { name: 'About us' });
        expect(heading).toBeInTheDocument();
    })
    it('should have a picture of the office', () => {
        render(<About />);
        const imgElement: HTMLElement = screen.getByRole('img', { name: /office/i });
        expect(imgElement).toHaveAttribute('src');
    })
 })