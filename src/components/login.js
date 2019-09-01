import React from 'react';
import EnterPin from '../containers/enter-pin';

const Intro = props => {
  return (
    <React.Fragment>
      <div>Welcome, please enter your PIN</div>
      <EnterPin />
    </React.Fragment>
  );
};

export default Intro;
