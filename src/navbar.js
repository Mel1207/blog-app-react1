const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>My blog</h1>
            <div className="links">
                <a href="/">Home</a>
                {/* <a href="/" style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px"
                }}>New Blog</a> */}
                <a href="/">New Blog</a>
            </div>
        </nav>
    );
}
 
export default Navbar;