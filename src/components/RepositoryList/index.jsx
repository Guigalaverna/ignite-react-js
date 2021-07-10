import React from "react";
import RepositoryItem from "../RepositoryItem";

function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>

      <ul>
        <RepositoryItem
          repository={{
            name: "unform",
            description: "Forms in React.js",
            url: "https://google.com",
          }}
        />
        <RepositoryItem
          repository={{
            name: "unform",
            description: "Forms in React.js",
            url: "https://google.com",
          }}
        />
        <RepositoryItem
          repository={{
            name: "unform",
            description: "Forms in React.js",
            url: "https://google.com",
          }}
        />
        <RepositoryItem
          repository={{
            name: "unform",
            description: "Forms in React.js",
            url: "https://google.com",
          }}
        />
      </ul>
    </section>
  );
}

export default RepositoryList;
