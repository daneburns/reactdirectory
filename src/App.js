import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import API from "./utils/API";
import Bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Table, TableItem } from "./components/Table";
import Container from "./components/Container";
import Nav from "./components/Nav";
function App() {
  const [users, setUsers] = useState(0);
  const [form, setForm] = useState(0);
  const [errors, setErrors] = useState(0);
  const [filteredUsers, setFilter] = useState(0);

  function userFilter(users) {
    if(form){
    return users.filter((user) => JSON.stringify(user).includes(form));
    }
    else {
      return(users)
    }
  }


  function sortName(e) {
    e.preventDefault();
    const sorted = users.sort(function (a, b) {
      var nameA = a.name.first.toUpperCase(); // ignore upper and lowercase
      var nameB = b.name.first.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
    setFilter(1)

    // arr.forEach(callback(currentValue [, index [, array]])[, thisArg])
  }

  // if(users === 0){
  //   getUser()
  // }
  // const Planets = () => {
  //   const [hasError, setErrors] = useState(false);
  //   const [planets, setPlanets] = useState({});
  async function fetchData() {
    const res = await fetch("https://randomuser.me/api/?nat=us&results=20");
    res
      .json()
      .then((res) => setUsers(res.results))
      .catch((err) => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  }, [errors]);

  useEffect(() => {

  },[setFilter])

  const handleInputChange = (event) => {
    const { value } = event.target;
    console.log(value);
    setForm(value);
  };

  return (
    <div className="App">
      <Nav />
      <div className="row d-inline-flex flex-content-center mx-auto justify-content-center m-5">
        <form class="form-inline">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => handleInputChange(e)}
          ></input>
          <button
            class="btn btn-outline-success my-2 my-sm-0"
            type="submit"
            onClick={(event) => sortName(event)}
          >
            Sort By Name
          </button>
        </form>
      </div>

      <Container>
        {users.length ? (
          <Table>
            {userFilter(users).map((user) => (
              <TableItem
                key={user.login.uuid}
                name={user.name.first + " " + user.name.last}
                phone={user.phone}
                email={user.email}
                thumbnail={user.picture.thumbnail}
              ></TableItem>
            ))}
          </Table>
        ) : (
          <h3>No Results to Display</h3>
        )}
      </Container>
    </div>
  );
}

export default App;
