import React, { Component } from "react";
import axios from "axios";
import Header from "../components/Header";
import Search from "../components/Search";
import ShortList from "../components/ShortList";
import PersonCard from "../components/PersonCard";

class PeopleList extends Component {
  state = {
    listOfPeople: [],
    filteredPeople: [],
    favorites: [],
    nextPage: null,
    searchTerm: null,
  };

  componentDidMount() {
    this.getAllPeople();
  }

  getAllPeople = () => {
    axios
      .get("https://swapi.dev/api/people/")
      .then((response) => {
        const people = response.data.results;
        this.setState({
          listOfPeople: people,
          filteredPeople: people,
          nextPage: response.data.next,
        });
      })
      .catch((err) => console.log(err));
  };

  getNextPage = () => {
    // If we reached the last page we don't call anymore
    if (!this.state.nextPage) return null;
    axios
      .get(this.state.nextPage)
      .then((response) => {
        const people = response.data.results;
        this.setState({
          listOfPeople: this.state.listOfPeople.concat(people),
          filteredPeople: people,
          nextPage: response.data.next,
        });
      })
      .catch((err) => console.log(err));
  };

  filterPeople = (query) => {
    this.setState({ searchTerm: query });
    axios
      .get(`https://swapi.dev/api/people/?search=${query}`)
      .then((response) => {
        const searchResult = response.data.results;
        this.setState({ filteredPeople: searchResult });
      })
      .catch((err) => console.log(err));
  };

  addFavorite(index) {
    const favList = this.state.favorites.concat([index]);
    this.setState({
      favorites: favList,
    });
  }

  loadMore() {
    this.getNextPage();
  }

  clearSearch = () => {
    this.setState({ searchTerm: null });
    this.searchBar.clearSearch();
  };

  render() {
    return (
      <div>
        <div className="people-list">
          <Header />
        </div>

        <div className="myLeague-title">
          <h2>My Galactic League</h2>
          <Search
            ref={(element) => (this.searchBar = element)}
            filterPeople={this.filterPeople}
          />
          <button onClick={this.clearSearch}>Clear</button>
          <ShortList
            favorites={this.state.favorites}
            addFavorite={this.addFavorite.bind(this)}
          />
        </div>

        {this.state.searchTerm
          ? this.state.filteredPeople.map((person, index) => {
              return <PersonCard key={index} index={index} {...person} />;
            })
          : this.state.listOfPeople.map((person, index) => {
              return <PersonCard key={index} index={index} {...person} />;
            })}

        <button onClick={this.loadMore.bind(this)}>Load More</button>
      </div>
    );
  }
}

export default PeopleList;
