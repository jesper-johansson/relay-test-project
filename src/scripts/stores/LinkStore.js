import { EventEmitter } from 'events';
import Dispatcher from '../Dispatcher';
import ActionTypes from '../Constants';

let links = [];

class LinkStore extends EventEmitter {
  constructor(props) {
    super(props);

    Dispatcher.register((action) => {
      switch (action.actionType) {
        case ActionTypes.RECEIVE_LINKS:
          console.log('in store');
          links = action.links;
          this.emit('change');
          break;
        default:
      }
    });
  }

  getAll() {
    return links;
  }
}

export default new LinkStore();
