'use strict';

import React from 'react';
import Superagent from 'superagent';

import SearchForm from './reddit/searchForm.js';
import SearchResultList from './reddit/serchResultList.js';

const apiUrl = const apiUrl = 'http://www.reddit.com/r';


export default class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        subreddit: '',
        results: [],
        
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.isLoading = this.isLoading.bind(this);
    }
