import React, {useState, useEffect} from "react";
import logo from "./logo.svg";
import "./App.css";
import API from "./utils/API";
import Bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {Table, TableItem} from "./components/Table"
import Container from "./components/Container"
import Nav from "./components/Nav"
function App() {
  
  const [users, setUsers] = useState(0)
  const [form, setForm] = useState(0)
  
  if(users === 0){
    getUser()
  }
 

  const handleInputChange = event => {
    const { value } = event.target;
    console.log(value)
    setForm(value);
    const filtered = users.filter(user => user.name.first.includes(value))
    setUsers(filtered)
  };
  
  async function getUser(){
  const usersGot = await API.getUser();
  setUsers(usersGot.data.results)
  }

  return (
    <div className="App">
    <Nav/>
    <div className='row d-inline-flex flex-content-center mx-auto justify-content-center m-5'>
    <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => handleInputChange(e)}></input>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
      </div>
      
      <Container>
    {users.length ? (

              <Table>
                {users.map(user => (
                  <TableItem key={user.login.uuid} name={user.name.first + " " + user.name.last} phone={user.phone} email={user.email} thumbnail={user.picture.thumbnail}>

                  </TableItem>
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
