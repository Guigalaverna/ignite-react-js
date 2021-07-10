import React from "react";

function RepositoryItem({ repository }) {
  return (
    <li>
      <strong>{repository.name}</strong>
      <p>{repository.description}</p>
      <a href={repository.url}>Acessar repositório</a>
    </li>
  );
}

export default RepositoryItem;
