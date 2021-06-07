import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Alphabat from "./components/Alphabat/Alphabat";
import Container from "./components/Container/Container";

function App() {
  const [appState, setAppState] = useState({ users: null });

  useEffect(() => {
    const apiUrl =
      "https://yalantis-react-school-api.yalantis.com/api/task0/users";
    axios.get(apiUrl).then((resp) => {
      const allPersons = resp.data;
      setAppState({
        users: allPersons,
      });
    });
  }, [setAppState]);

  return (
    <div className="App">
      <Container>
        <Alphabat users={appState.users} />
      </Container>
    </div>
  );
}

export default App;
