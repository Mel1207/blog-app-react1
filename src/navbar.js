import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>My blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                {/* <a href="/" style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px"
                }}>New Blog</a> */}
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;