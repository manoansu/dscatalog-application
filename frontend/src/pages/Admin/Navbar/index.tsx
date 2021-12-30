import { NavLink } from 'react-router-dom';
import { hasAnyRole } from 'util/auth';
import './styles.css';
const Navbar = () =>{

    return(
        <nav className="admin-nav-container">
            <ul className='admin-nav-items-container'>
                <li>
                    <NavLink to="/admin/products" className="admin-nav-item">
                        <p>Products</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin/categories" className="admin-nav-item">
                        <p>Categories</p>
                    </NavLink>
                </li>
                { hasAnyRole(['ROLE_ADMIN'])  &&  (
                    <li>
                        <NavLink to="/admin/users" className="admin-nav-item">
                            <p>Users</p>
                        </NavLink>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;