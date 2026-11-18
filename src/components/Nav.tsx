const links = [
    ['Home', '#home'],
    ['About', '#about'],
    ['Experience', '#experience'],
    ['Skills', '#skills'],
    ['Education', '#education'],
    ['Projects', '#projects'],
]

const Nav = () => (
    <header className="nav">
        <div className="container nav__inner">
            <a className="nav__brand" href="#home">
                Zak Zangrando
            </a>
            <nav aria-label="Main">
                <ul className="nav__links">
                    {links.map(([label, href]) => (
                        <li key={href}>
                            <a href={href}>{label}</a>
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

export default Nav
