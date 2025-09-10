import "./header.css";
import Logo from "../../assets/img/argentbank-logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faGear,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../../redux/userslice";

function Header() {
  const user = useSelector((state) => state.user.user);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    dispatch(signOut());
    navigate("/");
  };

  return (
    <header className="header">
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src={Logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div className="main-nav-menu">
          {isAuthenticated && user ? (
            <>
              <Link
                className="main-nav-item main-nav-user"
                to={`/user/${user.token}`}
              >
                {user.userName}
                <FontAwesomeIcon
                  icon={faCircleUser}
                 
                />
              </Link>
              <Link className="main-nav-item" to="/settings">
                <FontAwesomeIcon icon={faGear} />
              </Link>
              <button
                className="main-nav-item"
                onClick={handleSignOut}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
                aria-label="Sign Out"
              >
                <FontAwesomeIcon icon={faPowerOff} />
              </button>
            </>
          ) : (
            <Link className="main-nav-item" to="/sign-in">
              <FontAwesomeIcon icon={faCircleUser} />
              Sign In
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
