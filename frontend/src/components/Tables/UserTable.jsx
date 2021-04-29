import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
import styled from 'styled-components';
import PaginationBasic from '../ Pagination'

const Container = styled.div`
    display: flex;
    background-color: #dedede;
    border-radius: 1px 1px 20px 20px;
    padding: 32px;
    height: 370px;
    width: 820px;

    box-shadow: 10px 5px 5px #ccc;
`;

const UserTable = (props) => {
    return (
        <Container>
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
                    {props.users.length > 0 ? (
                        props.users.map(user => {
                            const { id, name, sobrenome, idade, cpf, estadoCivil, cidade, estado } = user;
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
                    <PaginationBasic />
                </tbody>
            </Table>
        </Container>
    )
}

export default UserTable;