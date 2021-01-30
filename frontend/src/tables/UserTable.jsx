import React from 'react';

const UserTable = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Sobrenome</th>
                    <th>Idade</th>
                    <th>CPF</th>
                    <th>Estado Civil</th>
                    <th>Cidade</th>
                    <th>Estado</th>
                    <th>Editar</th>

                </tr>
            </thead>
            <tbody>
                { props.users.length > 0 ? (
                    props.users.map(user => {
                        const {id, name, sobrenome, idade, cpf, estadoCivil, cidade, estado} = user;
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{sobrenome}</td>
                                <td>{idade}</td>
                                <td>{cpf}</td>
                                <td>{estadoCivil}</td>
                                <td>{cidade}</td>
                                <td>{estado}</td>

                                <td>
                                    <button onClick={() => props.deleteUser(id)}>Delete</button>
                                    <button onClick={() => props.editUser(id, user)}>Edit</button>
                                </td>
                            </tr>
                        )
                    })
                ) : (
                    <tr>
                        <td colSpan={4}>Sem Registro.</td>
                    </tr>
                )   
                }
            </tbody>
        </table>
    )
}

export default UserTable;