import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Alphabat from "./components/Alphabat/Alphabat";
import Container from "./components/Container/Container";
import { Switch, Route } from "react-router";
import UsersBirthday from "./components/UsersBirthday/UsersBirthday";

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
      <Switch>
        <Container>
          <Route path="/">
            <Alphabat users={appState.users} />
          </Route>
        </Container>
        <Route path="/user-birthday">
          <UsersBirthday />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
