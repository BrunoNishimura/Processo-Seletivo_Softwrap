import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import React, { useState } from "react";
import userList from "./data.js";
import UserTable from "./components/Tables/UserTable";
import AddUserForm from "./components/Forms/AddUserForm.jsx";
import EditUserForm from "./components/Forms/EditUserForm";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: transparent;
`;

const EditContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #c8a2c8;
  border-radius: 20px 15px 1px 1px;
  padding: 8px;
  width: 25%;
  margin-left: 205px;
  cursor: pointer;
`;

const AddContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  background-color: #87cefa;
  border-radius: 20px 15px 1px 1px;
  padding: 9px;
  width: 200px;
  /* border: 1px solid red; */

  cursor: pointer;
`;

const ViewContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #c7c7c7;
  border-radius: 20px 15px 1px 1px;
  margin-left: 500px;
  padding: 8px;
  width: 25%;
  margin-left: 410px;
  cursor: pointer;
`;

const SoftwrapContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #ffe4b5;
  border-radius: 20px 15px 1px 1px;
  margin-left: 500px;
  width: 25%;
  margin-left: 615px;
  cursor: pointer;
`;

const StyledText = styled.text`
  color: white;
  font-size: 28px;
  font-weight: bold;
`;

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
    <div>
      <Container>
        <div className="row">
          <div>
            {editing ? (
              <div>
                <EditContainer>
                  <StyledText>Edit user</StyledText>
                </EditContainer>
                <EditUserForm
                  currentUser={currentUser}
                  setEditing={setEditing}
                  updateUser={updateUser}
                />
              </div>
            ) : (
              <div>
                <AddContainer>
                  <StyledText>Add user</StyledText>
                </AddContainer>
                <SoftwrapContainer>
                  <img alt="Softwrap" title="Softwrap" src="../assets/logo.png" width="120px" />
                </SoftwrapContainer>
                <AddUserForm addUser={addUser} />
              </div>
            )}
          </div>
          <div className="seven columns">
            <ViewContainer>
              <StyledText>View users</StyledText>
            </ViewContainer>
            <UserTable
              users={users}
              deleteUser={deleteUser}
              editUser={editUser}
            />
          </div>
        </div>
      </Container>

    </div>
  );
};

export default App;
