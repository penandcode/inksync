import { Link } from "react-router-dom";

const Header = () => {
    return (<>
        <header className="hero">
            <h1 className="hero-heading">Welcome to InkSync</h1>
            <p className="hero-sub-heading">
                A real-time Markdown editor with live preview, syntax highlighting, and customizable themes.
            </p>
            <Link to="/app">
                <button className="button hero-button">
                    Get Started
                </button>
            </Link>
        </header>
    </>)
}

export default Header;