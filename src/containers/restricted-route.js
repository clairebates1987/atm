import { connect } from 'react-redux';
import RestrictedRoute from '../components/restricted-route';

const mapStateToProps = ({ user }) => {
  return {
    isLoggedIn: user.loggedIn
  };
};

export default connect(
  mapStateToProps,
  null
)(RestrictedRoute);
