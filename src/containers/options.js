import { connect } from 'react-redux';
import Options from '../components/options';

const mapStateToProps = ({ user }) => {
  return user;
};

export default connect(
  mapStateToProps,
  null
)(Options);
