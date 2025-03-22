import { Link, NavLink } from 'react-router';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
           <div className="container-fluid">
             
           <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeclassname="active"
                        exact="true"
                        className="nav-item nav-link" 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/dc"
                        activeclassname="active"
                        exact="true"
                    >
                        DC
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">

                    <span className='nav-item nav-link text-primary'>
                        Fernando
                    </span>

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/login"
                        activeclassname="active"
                        exact="true"
                    >
                        Logout
                    </NavLink>
                </ul>
            </div>
           </div>
        </nav>
    )
}