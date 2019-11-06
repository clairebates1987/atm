import { connect } from 'react-redux';
import EnterPin from '../components/enter-pin';
import { enterPin } from '../actions/userAction';

const mapStateToProps = ({ user }) => {
  return user;
};

const mapDispatchToProps = dispatch => {
  return {
    enterPin: pin => {
      dispatch(enterPin(pin));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EnterPin);
