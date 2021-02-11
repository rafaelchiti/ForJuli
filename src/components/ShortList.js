import React from "react";

// En la seccion My Galactic League se podrán añadir 10 personajes diferentes.
//Este apartado se puede administrar, eliminando o añadiendo nuevos personajes, siempre respetando el número
//máximo y que éstos no se repitan.

export default ({ data, favorites }) => {
  const nameList = favorites.map((id) => {
    const name = data[id].name;
    return <li key={id}>{name}</li>;
  });
  return (
    <div>
      <p>Click on a character name to shortlist it...</p>
      <ul>{nameList}</ul>
    </div>
  );
};
