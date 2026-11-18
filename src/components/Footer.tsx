const Footer = () => (
    <footer className="footer">
        <div className="container">
            <div className="footer__row">
                <strong>Zak Zangrando</strong>
                <nav aria-label="Elsewhere">
                    <a href="https://github.com/zakzc">GitHub</a>
                    <a href="https://www.linkedin.com/in/zakzangrando/">LinkedIn</a>
                </nav>
            </div>
            <p className="footer__credits">
                Photos from <a href="https://unsplash.com">Unsplash</a>. Design inspired by free portfolio templates on{' '}
                <a href="https://dribbble.com">Dribbble</a>. Icons from <a href="https://linearicons.com/">Linea</a> and{' '}
                <a href="https://www.flaticon.com/">Flaticon</a>; some hand-drawn.
            </p>
            <p className="footer__credits">&copy; {new Date().getFullYear()} Zak Zangrando</p>
        </div>
    </footer>
)

export default Footer
