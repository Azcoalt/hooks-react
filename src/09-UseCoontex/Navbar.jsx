import { Link, NavLink} from "react-router-dom"

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navar-dark bg-dark rounded-3">
        <div className="container-fluid">
            <Link className="navbar-brand text-light" to="/">UseContex</Link>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <NavLink 
                        className={({isActive}) => `nav-link text-info ${isActive ? 'active text-white':''}`}
                        to="/"
                    >
                        Home
                    </NavLink>
                    <NavLink 
                        className={({isActive}) => `nav-link text-info ${isActive ? 'active text-white':''}`}
                        to="/about"
                    >
                        About
                    </NavLink>
                    <NavLink 
                        className={({isActive}) => `nav-link text-info ${isActive ? 'active text-white':''}`}
                        to="/login"
                    >
                        Login
                    </NavLink>
                </ul>
            </div>
        </div>
    </nav>
  )
}
