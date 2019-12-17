import React, { Component } from 'react';
// import {Link} from 'react-router';
import { browserHistory } from 'react-router';

import './styles.sass';

class Item extends Component {
  constructor(props, context) {
    super (props, context);

    this.onButton = this.onButton.bind(this);
  }

  onButton = () => {
    // console.log(this.props.id);
    var addr = '/item/' + this.props.id;
    browserHistory.push(addr);
  }

  render() {
    return(
      <div className="item">
        <div className="content" onClick={ this.onButton } />
      </div>
    );
  }

}

export default Item;
