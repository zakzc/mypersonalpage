import { useState } from 'react'

const links = [
    ['Home', '#home'],
    ['About', '#about'],
    ['Experience', '#experience'],
    ['Skills', '#skills'],
    ['Education', '#education'],
    ['Projects', '#projects'],
]

const Nav = () => {
    const [open, setOpen] = useState(false)

    return (
        <header className="nav">
            <div className="container nav__inner">
                <a className="nav__brand" href="#home">
                    Zak Zangrando
                </a>
                <button
                    type="button"
                    className="nav__toggle"
                    aria-expanded={open}
                    aria-controls="main-nav"
                    onClick={() => setOpen((o) => !o)}
                >
                    {open ? 'Close' : 'Menu'}
                </button>
                <nav id="main-nav" className={open ? 'nav__menu is-open' : 'nav__menu'} aria-label="Main">
                    <ul className="nav__links">
                        {links.map(([label, href]) => (
                            <li key={href}>
                                <a href={href} onClick={() => setOpen(false)}>
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <a className="btn btn--ghost nav__cta" href="https://www.linkedin.com/in/zakzangrando/">
                    LinkedIn
                </a>
            </div>
        </header>
    )
}

export default Nav
