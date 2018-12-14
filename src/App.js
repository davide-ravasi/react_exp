import React, { Component } from 'react';
import './App.css';
import CardList from './CardList';
import SearchInput from './SearchInput';
import { robots } from './robots.js';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      robots:robots,
      searchField:''
    }
  }

  onSearchChange = (event) => {
    console.log(event.target.value);
  }
  
  render() {
    return (
      <div>
        <h1>Robofriends</h1>
        <SearchInput searchField={this.state.searchField} onSearchChange={this.onSearchChange} />
        <CardList robots={this.state.robots}/>
      </div>
    );
  }
}

export default App;
