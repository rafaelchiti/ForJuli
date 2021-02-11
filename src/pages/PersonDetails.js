import React, { Component } from "react";
import axios from "axios";
import Header from "../components/Header";
import {Link}  from 'react-router-dom'

class PersonDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getSinglePerson();
  }

  getSinglePerson = () => {
    const { params } = this.props.match;
    axios
      .get(`https://swapi.dev/api/people/${params.id}`)
      .then((response) => {
        const singlePerson = response.data.results;
        this.setState(singlePerson);
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { name, homeworld, starships } = this.state;
    return (
      <div>
    



        {this.state.people && this.state.people.map((singlePerson, index) => {
            return (
              <div key={index}>

                <Link to={`/people/${singlePerson._id}`}>{singlePerson.name}</Link>
              </div>
              );
          })}

        {/* <h2>{name}</h2>

        <article>
          <p>
            <span>Planet</span>: {homeworld}
          </p>
          <p>
            <span>Starships name</span>: {starships.name}
          </p>
          <p>
            <span>Starships model</span>: {starships.model}
          </p>
        </article> */}

      </div>
    );
  }
}

export default PersonDetails;
