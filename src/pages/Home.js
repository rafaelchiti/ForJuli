import React from "react";
import { Link } from "react-router-dom";


const Home = () => {

  return (
      
    <div >
      <h1 className="homeTitle">Star Wars Galactic League</h1>

     
      <img className="homeImage"  src="/images/StarWarsLogo.jpg" alt="home icon" />
 

   <div className="button-position">
        <Link to="/peopleList">
        <button className="button">  
        Go!
        </button>
        </Link>

        </div>
   
    </div>
  );
};

export default Home;