import React from "react";
import UsersItem from "../UsersItem/UsersItem";
import "./Alphabat.css";

const Alphabat = (props) => {
  const { users } = props;

  const sortFunction = (prev, next) => {
    return prev.lastName < next.lastName ? -1 : 1;
  };

  const makeUsersItem = (user) => {
    return (
      <UsersItem
        key={user.id}
        lastName={user.lastName}
        firstName={user.firstName}
      />
    );
  };

  // const filterFunction = () => {
  //   for (var i = 0; i < users.length; i++) {
  //     if (users[i].population > 1000000) {
  //       millionPlusCities.push(cities[i]);
  //     }
  //   }
  // };

  if (!users || users.length === 0) return <p>Нет данных.</p>;
  return (
    <>
      <div className="alphabatDiv">
        <h2>A</h2>
        <ul className="list">
          {users
            .sort(sortFunction)
            .filter((user) => user.lastName[0] === "A")
            .map(makeUsersItem)}
        </ul>
      </div>
      <div className="alphabatDiv">
        <h2>B</h2>
        <ul className="list">
          {users
            .sort(sortFunction)
            .filter((user) => user.lastName[0] === "B")
            .map(makeUsersItem)}
        </ul>
      </div>
      <div className="alphabatDiv">
        <h2>C</h2>
        <ul className="list">
          {users
            .sort(sortFunction)
            .filter((user) => user.lastName[0] === "C")
            .map(makeUsersItem)}
        </ul>
      </div>
      <div className="alphabatDiv">
        <h2>D</h2>
        <ul className="list">
          {users
            .sort(sortFunction)
            .filter((user) => user.lastName[0] === "D")
            .map(makeUsersItem)}
        </ul>
      </div>
      <div className="alphabatDiv">
        <h2>E</h2>
        <ul className="list">
          {users
            .sort(sortFunction)
            .filter((user) => user.lastName[0] === "E")
            .map(makeUsersItem)}
        </ul>
      </div>
      <div className="alphabatDiv">
        <h2>F</h2>
        <ul className="list">
          {users
            .sort(sortFunction)
            .filter((user) => user.lastName[0] === "F")
            .map(makeUsersItem)}
        </ul>
      </div>
      <div className="alphabatDiv">
        <h2>G</h2>
        <ul className="list">
          {users
            .sort(sortFunction)
            .filter((user) => user.lastName[0] === "G")
            .map(makeUsersItem)}
        </ul>
      </div>
      <div className="alphabatDiv">
        <h2>H</h2>
        <ul className="list">
          {users
            .sort(sortFunction)
            .filter((user) => user.lastName[0] === "H")
            .map(makeUsersItem)}
        </ul>
      </div>
      <div className="alphabatDiv">
        <h2>I</h2>
        <ul className="list">
          {users
            .sort(sortFunction)
            .filter((user) => user.lastName[0] === "I")
            .map(makeUsersItem)}
        </ul>
      </div>
      <div className="alphabatDiv">
        <h2>J</h2>
        <ul className="list">
          {users
            .sort(sortFunction)
            .filter((user) => user.lastName[0] === "J")
            .map(makeUsersItem)}
        </ul>
      </div>
      <div className="alphabatDiv">
        <h2>K</h2>
        <ul className="list">
          {users
            .sort(sortFunction)
            .filter((user) => user.lastName[0] === "K")
            .map(makeUsersItem)}
        </ul>
      </div>
      <div className="alphabatDiv">
        <h2>L</h2>
        <ul className="list">
          {users
            .sort(sortFunction)
            .filter((user) => user.lastName[0] === "L")
            .map(makeUsersItem)}
        </ul>
      </div>
      <div className="alphabatDiv">
        <h2>M</h2>
        <ul className="list">
          {users
            .sort(sortFunction)
            .filter((user) => user.lastName[0] === "M")
            .map(makeUsersItem)}
        </ul>
      </div>
      <div className="alphabatDiv">
        <h2>N</h2>
        <ul className="list">
          {users
            .sort(sortFunction)
            .filter((user) => user.lastName[0] === "N")
            .map(makeUsersItem)}
        </ul>
      </div>
      <div className="alphabatDiv">
        <h2>O</h2>
        <ul className="list">
          {users
            .sort(sortFunction)
            .filter((user) => user.lastName[0] === "O")
            .map(makeUsersItem)}
        </ul>
      </div>
      <div className="alphabatDiv">
        <h2>P</h2>
        <ul className="list">
          {users
            .sort(sortFunction)
            .filter((user) => user.lastName[0] === "P")
            .map(makeUsersItem)}
        </ul>
      </div>
      <div className="alphabatDiv">
        <h2>Q</h2>
        <ul className="list">
          {users
            .sort(sortFunction)
            .filter((user) => user.lastName[0] === "Q")
            .map(makeUsersItem)}
        </ul>
      </div>
      <div className="alphabatDiv">
        <h2>R</h2>
        <ul className="list">
          {users
            .sort(sortFunction)
            .filter((user) => user.lastName[0] === "R")
            .map(makeUsersItem)}
        </ul>
      </div>
      <div className="alphabatDiv">
        <h2>S</h2>
        <ul className="list">
          {users
            .sort(sortFunction)
            .filter((user) => user.lastName[0] === "S")
            .map(makeUsersItem)}
        </ul>
      </div>
      <div className="alphabatDiv">
        <h2>T</h2>
        <ul className="list">
          {users
            .sort(sortFunction)
            .filter((user) => user.lastName[0] === "T")
            .map(makeUsersItem)}
        </ul>
      </div>
      <div className="alphabatDiv">
        <h2>U</h2>
        <ul className="list">
          {users
            .sort(sortFunction)
            .filter((user) => user.lastName[0] === "U")
            .map(makeUsersItem)}
        </ul>
      </div>
      <div className="alphabatDiv">
        <h2>V</h2>
        <ul className="list">
          {users
            .sort(sortFunction)
            .filter((user) => user.lastName[0] === "V")
            .map(makeUsersItem)}
        </ul>
      </div>
      <div className="alphabatDiv">
        <h2>W</h2>
        <ul className="list">
          {users
            .sort(sortFunction)
            .filter((user) => user.lastName[0] === "W")
            .map(makeUsersItem)}
        </ul>
      </div>
      <div className="alphabatDiv">
        <h2>X</h2>
        <ul className="list">
          {users
            .sort(sortFunction)
            .filter((user) => user.lastName[0] === "X")
            .map(makeUsersItem)}
        </ul>
      </div>
      <div className="alphabatDiv">
        <h2>Y</h2>
        <ul className="list">
          {users
            .sort(sortFunction)
            .filter((user) => user.lastName[0] === "Y")
            .map(makeUsersItem)}
        </ul>
      </div>
      <div className="alphabatDiv">
        <h2>Z</h2>
        <ul className="list">
          {users
            .sort(sortFunction)
            .filter((user) => user.lastName[0] === "Z")
            .map(makeUsersItem)}
        </ul>
      </div>
    </>
  );
};

export default Alphabat;
