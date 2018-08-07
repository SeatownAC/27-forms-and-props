'use strict';

import React from 'react';

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    return (
      <form className={this.props.error ? 'error' : '' } onSubmit={this.props.handleSubmit}>
        <input id="searchFormBoard" type="text" placeholder="Search..."/>
        <input id="searchFormLimit" type="number" min="0" max="100"/>
        <input type="submit"/>
      </form>
    );
  }
}