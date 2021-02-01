import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Button, Form, FormControl } from 'react-bootstrap';

import React, { useState } from "react";
import userList from "./data.js";
import UserTable from "./tables/UserTable";
import AddUserForm from "./forms/AddUserForm";
import EditUserForm from "./forms/EditUserForm";
import TopNav from './components/template/TopNav'

import axios from "axios";



const App = () => {
  const [users, setUsers] = useState(userList);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const [editing, setEditing] = useState(false);

  const initialUser = { id: null, nome: "", sobrenome: "", idade: "", estadoCivil: "", cpf: "", cidade: "", estado: "" };

  const [currentUser, setCurrentUser] = useState(initialUser);

  const editUser = (id, user) => {
    setEditing(true);
    setCurrentUser(user);
  };

  const updateUser = (newUser) => {
    setUsers(
      users.map((user) => (user.id === currentUser.id ? newUser : user))
      );
      setCurrentUser(initialUser);
      setEditing(false);
  };
  
  return (
    
    <div className="container">
      {TopNav}
        <h1>Processo Seletivo | Softwrap</h1>
        <div className="row">
          <div className="five columns">
            {editing ? (
              <div>
                <h2>Edit user</h2>
                <EditUserForm
                  currentUser={currentUser}
                  setEditing={setEditing}
                  updateUser={updateUser}
                  />
              </div>
            ) : (
              <div>
                  <h2>Add user</h2>
                  <AddUserForm addUser={addUser} />
                </div>
              )}
          </div>
          <div className="seven columns">
            <h2>View users</h2>
            <UserTable
              users={users}
              deleteUser={deleteUser}
              editUser={editUser}
              />
          </div>
        </div>
      </div>
    
  );
};

export default App;
