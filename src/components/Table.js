import React from "react";

export function Table({ children }) {
    
  return (

    <table className="table">
    <thead class='thead-dark'>
      <tr>
        <th scope="col">Photo</th>
        <th scope="col">Name</th>
        <th scope="col">Phone</th>
        <th scope="col">Email</th>
      </tr>
    </thead>
    <tbody>
     {children}
      </tbody>
    </table>
    
  );
}

export function TableItem(props) {
    return ( 
    <tr>
    <td><img src={props.thumbnail}></img></td>
    <th scope="row">{props.name}</th>
    <td>{props.phone}</td>
    <td>{props.email}</td>
    </tr>
    )
  }

