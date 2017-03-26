import Dispatcher from '../Dispatcher';
import ActionTypes from '../Constants';

const Actions = {
  receiveLinks(links) {
    Dispatcher.dispatch({
      actionType: ActionTypes.RECEIVE_LINKS,
      links,
    });
  },
};

export default Actions;
