import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import PeopleList from "./pages/PeopleList";
import PersonDetails from "./pages/PersonDetails";
import PersonCard from "./components/PersonCard";

function App() {
  return (

    <div>
      <Route exact path="/" component={Home} />
      <PersonCard />

      <Switch>
        <Route exact path="/peopleList" component={PeopleList} />
        <Route exact path="/personDetails/:id" component={PersonDetails} />
      </Switch>
    </div>
  );
}

export default App;
