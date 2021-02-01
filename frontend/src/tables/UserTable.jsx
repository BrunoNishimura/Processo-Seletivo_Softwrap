import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Pagination, Table } from 'react-bootstrap';

let active = 2;
let items = [];
for (let number = 1; number <=3; number++){
    items.push(
        <Pagination.Item key={number} active={number === active}>
            {number}
        </Pagination.Item>
    );
};

const paginationBasic = (
    <div>
        <Pagination>{items}</Pagination>
    </div>
)



const UserTable = (props) => {
    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>#ID</th>
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
                        <td colSpan={9}>Sem Registro.</td>
                    </tr>
                )   
                }
            </tbody>
            {paginationBasic}
        </Table>
    )
}

export default UserTable;