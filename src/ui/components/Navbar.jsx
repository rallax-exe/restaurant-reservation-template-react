import { Link, NavLink } from 'react-router-dom';



export const Navbar = () => {

    const toggleMenu = () => {
        document.body.classList.toggle("open");
    };

    return (
        <>
            <NavLink
                className="navbar"
                to="/"
            >
                <img className="navbar-logo" src="../../../assets/images/navbar/logo.png" />
            </NavLink>
            <button className="navbar-burger" onClick={toggleMenu}></button>
            <nav className="menu">
                <NavLink
                    //className={({ isActive }) => `nav-item  nav-link ${isActive ? 'active' : ''}`}
                    to="/restaurants"
                    onClick={ toggleMenu }

                >
                    Home
                </NavLink>

                <NavLink
                    //className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                    to="/search"
                    onClick={ toggleMenu }
                >
                    Search Restaurants
                </NavLink>
            </nav>
        </>
        /*

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link 
                    className="navbar-brand" 
                    to="/"
                >
                    Melp
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ms-auto ">
                    
                    <NavLink 
                        className={ ({ isActive }) => `nav-item  nav-link ${ isActive ? 'active' :'' }` }
                        to="/restaurants"
                    >
                        Restaurants
                    </NavLink>

                    <NavLink 
                        className={ ({ isActive }) => `nav-item nav-link ${ isActive ? 'active' :'' }` }
                        to="/search"
                    >
                        Search Restaurants
                    </NavLink>
                </div>
                </div>
            </div>
        </nav>


    */

    )
}