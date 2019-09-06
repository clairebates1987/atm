import { connect } from 'react-redux';
import Balance from '../components/balance';

const mapStateToProps = ({ user }) => {
  console.log(user);
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
)(Balance);
