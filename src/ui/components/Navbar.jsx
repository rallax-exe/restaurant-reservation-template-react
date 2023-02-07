import { Link, Navigate, NavLink, useNavigate } from 'react-router-dom';
import { useForm } from '../../melp/hooks/useForm';




export const Navbar = () => {

    const navigate = useNavigate();

    const { searchText, onInputChange } = useForm({
        searchText: ''
    });

    const onSearchSubmit = (event) => {
        event.preventDefault();
        if (searchText.trim().length <= 1) return;
        //navigate(`?q=${searchText.toLowerCase().trim()}`);
        //Navigate(`search/?q=${searchText}`);
        navigate(`/search/?q=${searchText}`);

    }

    return (
        <>

            <nav className="navbar navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <NavLink
                        //classNameName={({ isActive }) => `nav-item  nav-link ${isActive ? 'active' : ''}`}
                        to="/restaurants"
                    >
                        <img className="navbar-logo" src="../../../assets/images/navbar/logo.png" />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Discover more</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li 
                                    className="nav-item"
                                    data-bs-toggle="offcanvas"
                                >
                                    <NavLink
                                        className="nav-link active"
                                        aria-current="page"
                                        to="/"
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li 
                                    className="nav-item"
                                    data-bs-toggle="offcanvas"
                                >
                                    <NavLink
                                        className="nav-link active"
                                        aria-current="page"
                                        to="/search"
                                    >
                                        Search a restaurant
                                    </NavLink>
                                </li>                               
                                <li 
                                    className="nav-item"
                                    data-bs-toggle="offcanvas"
                                >
                                    <NavLink
                                        className="nav-link active"
                                        aria-current="page"
                                        to="/search"
                                    >
                                        Contact 
                                    </NavLink>
                                </li>
                            </ul>
                            <form className="d-flex mt-3" onSubmit={onSearchSubmit}>

                                <input
                                    type="text"
                                    placeholder="Type a state"
                                    className="form-control me-2"
                                    name="searchText"
                                    autoComplete="off"
                                    value={searchText}
                                    onChange={onInputChange}
                                />
                                <button className="btn btn-outline-primary active">Search</button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>



        </>

    )
}