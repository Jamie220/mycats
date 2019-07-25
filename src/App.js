import React from 'react';
import { manycats } from './robots'
import CardList from './CardList'
import SearchBar from './SearchBar'
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: manycats,
      searchField: ''
    }
  }

  searchBarValue = (event) => {
    this.setState({ searchField: event.target.value });
  }



  render() {
    const compareSearchValue = this.state.cats.filter(cat => {
      return cat.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    })
    return (
      <div>
        <h1 className="tc">My Cat Friends</h1>
        <SearchBar search={this.searchBarValue} />
        <CardList manycats={compareSearchValue} />
      </div>
    );
  }
}
export default App;

