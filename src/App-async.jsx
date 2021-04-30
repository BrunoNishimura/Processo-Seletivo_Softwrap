import React, { useState, useEffect } from "react";
import UserTable from "./components/Tables/UserTable";
import AddUserForm from "./components/Forms/AddUserForm.jsx";
import EditUserForm from "./components/Forms/EditUserForm";

import { useAsyncRequest } from "./hooks";



const App = () => {
  const [data, loading] = useAsyncRequest(3);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    if (data) {
      const formattedUsers = data.map((obj, i) => {
        return {
          id: i,
          nome: obj.nome.first,
          sobrenome: obj.sobrenome,
          idade: obj.idade,
          cpf: obj.cpf,
          estadoCivil: obj.estadoCivil,
          cidade: obj.cidade,
          estado: obj.estado,
        };
      });
      setUsers(formattedUsers);
    }
  }, [data]);

  const addUser = (user) => {
    user.id = users.length;
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
        {loading || !users ? (
          <p>Loading...</p>
        ) : (
          <div className="seven columns">
            <h2>View users</h2>

            <UserTable
              users={users}
              deleteUser={deleteUser}
              editUser={editUser}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
