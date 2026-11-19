import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

test('renders the landing page sections', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /zak/i, level: 1 })).toBeInTheDocument()
    for (const name of [
        'About Me',
        'Professional Experience',
        'Skills & Technologies',
        'Education',
        'Recent Projects',
    ]) {
        expect(screen.getByRole('heading', { name })).toBeInTheDocument()
    }
})

test('project cards show a link only when the project has one', () => {
    render(<App />)
    const card = (name: RegExp) => screen.getByRole('heading', { name }).closest('article') as HTMLElement
    expect(within(card(/news hub/i)).queryByRole('link')).toBeNull()
    expect(within(card(/invaders/i)).getByRole('link', { name: 'GitHub' })).toHaveAttribute(
        'href',
        'https://github.com/zakzc/invaders'
    )
})

test('skills join several items with commas', () => {
    render(<App />)
    expect(screen.getByText('Sass, Less, Tailwind')).toBeInTheDocument()
})

test('mobile menu button toggles the navigation', async () => {
    render(<App />)
    const button = screen.getByRole('button', { name: 'Menu' })
    expect(button).toHaveAttribute('aria-expanded', 'false')
    await userEvent.click(button)
    expect(screen.getByRole('button', { name: 'Close' })).toHaveAttribute('aria-expanded', 'true')
})
