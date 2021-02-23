import React from "react";
import "./App.css";
import { request, gql } from "graphql-request";

function App() {
  const query = gql`
    {
      getClients {
        id
        firstName
        lastName
      }
    }
  `;
  const getClient = () =>
    request("https://test-task.expane.pro/api/graphql", query)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));

  return (
    <div className="App">
      <button onClick={getClient}>Test GraphQL</button>
    </div>
  );
}

export default App;
