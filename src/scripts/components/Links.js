import React from 'react';
import API from '../API';
import LinkStore from '../stores/LinkStore';

const getState = () => ({ links: LinkStore.getAll() });

class Links extends React.Component {
  static propTypes = {
    limit: React.PropTypes.number,
  }

  static defaultProps = {
    limit: 3,
  }

  state = getState();

  componentDidMount() {
    API.fetchLinks();
    LinkStore.on('change', this.onChange);
  }

  componentWillUnmount() {
    LinkStore.removeListener('change', this.onChange);
  }

  onChange = () => {
    this.setState(getState());
  }

  render() {
    const content = this.state.links.slice(0, this.props.limit).map(link =>
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
