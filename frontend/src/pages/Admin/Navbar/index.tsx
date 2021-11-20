import './styles.css';
const Navbar = () =>{

    return(
        <nav className="admin-nav-container">
            <ul>
                <li>
                    <a href="link" className="admin-nav-item active">
                        <p>Products</p>
                    </a>
                </li>
                <li>
                    <a href="link" className="admin-nav-item">
                        <p>Categories</p>
                    </a>
                </li>
                <li>
                    <a href="link" className="admin-nav-item">
                        <p>Users</p>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;