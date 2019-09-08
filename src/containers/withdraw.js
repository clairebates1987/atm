import { connect } from 'react-redux';
import Withdraw from '../components/withdraw';

const mapStateToProps = ({ user, bank }) => {
  console.log(user, bank);
  return user;
};

const mapDispatchToProps = dispatch => {
  return {
    /*enterPin: pin => {
      dispatch(enterPin(pin));
    }*/
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Withdraw);
