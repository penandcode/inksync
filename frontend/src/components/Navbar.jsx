import { Link } from "react-router-dom";

const Navbar = ({ isApp }) => {
    return (<>
        <nav className="navbar">
            <Link to="/">
                <h1 className="heading">InkSync</h1>
            </Link>
            {!isApp ? <Link to="/app" className="button">
                Open Editor
            </Link> : <Link to="/" className="button">
                Home
            </Link>}
        </nav>
    </>)
}

export default Navbar;