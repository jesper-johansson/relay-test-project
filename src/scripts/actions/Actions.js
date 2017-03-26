import Dispatcher from '../Dispatcher';
import ActionTypes from '../Constants';

const Actions = {
  receiveLinks(links) {
    console.log('in actions');
    Dispatcher.dispatch({
      actionType: ActionTypes.RECEIVE_LINKS,
      links,
    });
  },
};

export default Actions;
