import React from 'react';
import ReactDOM from 'react-dom';
import Relay from 'react-relay';

import Links from './components/Links';

ReactDOM.render(<Links />, document.getElementById('app'));

console.log(
  Relay.QL`
    query Test {
      links {
        title
      }
    }
  `,
);
