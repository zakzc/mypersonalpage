import { render, screen } from '@testing-library/react'
import App from './App'

test('renders the landing page sections', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /zak/i, level: 1 })).toBeInTheDocument()
    for (const name of ['About Me', 'Professional Experience', 'Skills & Technologies', 'Education', 'Recent Projects']) {
        expect(screen.getByRole('heading', { name })).toBeInTheDocument()
    }
})
