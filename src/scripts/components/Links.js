import React from 'react';
import API from '../API';
import LinkStore from '../stores/LinkStore';

const getState = () => ({ links: LinkStore.getAll() });

class Links extends React.Component {
  constructor(props) {
    super(props);
    this.state = getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    API.fetchLinks();
    LinkStore.on('change', this.onChange);
  }

  componentWillUnmount() {
    LinkStore.removeListener('change', this.onChange);
  }

  onChange() {
    console.log('in view');
    this.setState(getState());
  }

  render() {
    const content = this.state.links.map(link =>
      <li key={link._id}>
        <a href={link.url}>
          {link.title}
        </a>
      </li>,
    );

    return (
      <div>
        <h2>Links</h2>
        <ul>
          {content}
        </ul>
      </div>
    );
  }
}

export default Links;
