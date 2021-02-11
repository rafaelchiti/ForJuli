import React from "react";
import { Link } from "react-router-dom";
const PersonCard = ({ index, name, homeworld, starships }) => {
  return (
    <article>
      <Link to={`/personDetails/${index}`}>
        <h4>{name}</h4>
      </Link>
    </article>
  );
};
export default PersonCard;
