import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import React, { useState } from "react";
import userList from "./data.js";
import UserTable from "./components/Tables/UserTable";
import AddUserForm from "./components/Forms/AddUserForm.jsx";
import EditUserForm from "./components/Forms/EditUserForm";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    background-color: transparent;
    `;

const LogoContainer = styled.div`
  display: flex;
  cursor: pointer;
`;

const LayoutContainer = styled.div`
  display: flex;
  margin: auto;
`;

const FileContainer = styled(LayoutContainer)`
  flex-direction: column;
  padding: 20px;
`;

const AddContainer = styled.div`
  /* position: absolute; */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #87cefa;
  border-radius: 20px 15px 1px 1px;
  width: 200px;
  height: 60px;
  box-shadow: 10px 5px 5px #cccccc;
  cursor: pointer;
`;

const EditContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #c8a2c8;
  border-radius: 20px 15px 1px 1px;
  width: 200px;
  height: 60px;
  margin-left: 205px;
  box-shadow: 10px 5px 5px #cccccc;
  cursor: pointer;
`;

const ViewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #c7c7c7;
  border-radius: 20px 15px 1px 1px;
  width: 205px;
  height: 60px;
  margin-left: 410px;
  box-shadow: 10px 5px 5px #cccccc;  
  cursor: pointer;
`;

// const SoftwrapContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   background-color: #ffe4b5;
//   border-radius: 20px 15px 1px 1px;
//   /* width: 25%; */
//   margin-left: 615px;
//   cursor: pointer;
// `;

const StyledText = styled.text`
  color: white;
  font-size: 28px;
  font-weight: bold;
`;

const App = (props) => {
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
    <>
      <Container>
        <LogoContainer>
          <a href="https://github.com/BrunoNishimura/Processo-Seletivo_Softwrap">
            <img alt="Softwrap" title="Softwrap | Processso Seletivo" src="../assets/logo.png" width="120px" />
          </a>
        </LogoContainer>
        <LayoutContainer>
          {editing ? (
            <FileContainer>
              <EditContainer>
                <StyledText>Edit user</StyledText>
              </EditContainer>
              <EditUserForm
                currentUser={currentUser}
                setEditing={setEditing}
                updateUser={updateUser}
              />
            </FileContainer>
          ) : (
            <FileContainer>
              <AddContainer>
                <StyledText>Add user</StyledText>
              </AddContainer>
              <AddUserForm addUser={addUser} />
            </FileContainer>
          )}
          <FileContainer>
            <ViewContainer>
              <StyledText>View users</StyledText>
            </ViewContainer>
            <UserTable
              users={users}
              deleteUser={deleteUser}
              editUser={editUser}
            />
          </FileContainer>
        </LayoutContainer>
      </Container>
    </>
  );
};

export default App;
