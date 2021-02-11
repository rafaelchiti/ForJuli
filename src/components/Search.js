import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
    };
  }

  handleChange = (e) => {
    this.setState({ query: e.target.value });
  };

  clearSearch = () => {
    this.setState({ query: "" });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.filterPeople(this.state.query);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} id="search-bar">
        <input
          className="search"
          type="text"
          name="query"
          placeholder="Search for a character"
          value={this.state.query}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default Search;
