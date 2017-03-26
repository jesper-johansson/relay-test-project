import axios from 'axios';
import Actions from './actions/Actions';

const API = {
  fetchLinks() {
    console.log('fetch links executed');
    axios('/data/links')
    .catch((err) => {
      console.log(`Error: ${err}`);
    })
    .then((resp) => {
      Actions.receiveLinks(resp.data);
    });
  },
};

export default API;
