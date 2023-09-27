import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  const { logout, token } = props;
  
  return (
    <div className="navbar">

      {token && <Link to="/public">
        All Recipes
      </Link>}
      
      { token && <Link to="/profile">
        Profile
      </Link>}
      
     { token && <button className="logoutBtn"onClick={logout}>
        Logout
      </button>}
    </div>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired, // Define logout as a required function prop
  token: PropTypes.string, // Define token as an optional string prop
};


export default Navbar;
