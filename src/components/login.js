import React from 'react';
import EnterPin from '../containers/enter-pin';
import './stylesheets/login.scss';

const Intro = props => {
  return (
    <React.Fragment>
      <div className='welcome-message'>Welcome, please enter your PIN</div>
      <EnterPin />
    </React.Fragment>
  );
};

export default Intro;
