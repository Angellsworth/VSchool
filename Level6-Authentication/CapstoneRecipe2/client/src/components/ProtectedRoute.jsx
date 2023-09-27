import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

function ProtectedRoute(props) {
  const { token, children, redirectTo } = props;
  return token ? children : <Navigate to={redirectTo} />;
}

ProtectedRoute.propTypes = {
  token: PropTypes.string, // Define token as an optional string prop
  children: PropTypes.node, // Define children as an optional node prop
  redirectTo: PropTypes.string, // Define redirectTo as an optional string prop
};

export default ProtectedRoute;

