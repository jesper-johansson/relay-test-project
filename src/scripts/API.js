import axios from 'axios';
import Actions from './actions/Actions';

const API = {
  fetchLinks() {
    console.log('fetch links executed');
    axios.post('/graphql', {
      query: `{
        links {
          _id,
          title,
          url
        }
      }`,
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
    })
    .then((resp) => {
      Actions.receiveLinks(resp.data.data.links);
    });
  },
};

export default API;
