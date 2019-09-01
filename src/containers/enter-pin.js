import { connect } from 'react-redux';
import EnterPin from '../components/enter-pin';
import axios from 'axios';

const enterPin = pin => {
  return () => {
    return axios
      .post('https://frontend-challenge.screencloud-michael.now.sh/api/pin/', {
        pin: pin
      })
      .then(res => {
        //logUserIn();
        //updateBalance(res.data.currentBalance);
      })
      .catch(err => {
        // set error string prop
      });
  };
};

const mapStateToProps = ({ user }) => {
  return user;
};

const mapDispatchToProps = dispatch => {
  return {
    enterPin
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EnterPin);
