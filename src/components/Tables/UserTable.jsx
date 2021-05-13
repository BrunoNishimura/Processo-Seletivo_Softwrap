import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button } from 'react-bootstrap';
import styled from 'styled-components';
import PaginationBasic from '../Pagination'

const Container = styled.div`
    display: table;
    flex-direction: column;
    background-color: #dedede;
    border-radius: 1px 1px 20px 20px;
    padding: 32px;
    height: 370px;
    width: 700px;
    /* margin-left: 5%; */

    box-shadow: 10px 5px 5px #cccccc;
`;

const StyledTable = styled.div`
    display: flex;
    height: 250px;
    width: 650px;
`;

const StyledButton = styled.div`
    display: flex;
    justify-content: center;
    padding: 1px;
`;

const UserTable = (props) => {
    return (
        <Container>
            <StyledTable>
                <Table responsive striped bordered hover variant="dark" size="sm">
                    <thead>
                        <tr>
                            {/* <th>#ID</th> */}
                            <th>Nome</th>
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
                                const { id, name, idade, cpf, estadoCivil, cidade, estado } = user;
                                return (
                                    <tr key={id}>
                                        {/* <td>{id}</td> */}
                                        <td>{name}</td>
                                        <td>{idade}</td>
                                        <td>{cpf}</td>
                                        <td>{estadoCivil}</td>
                                        <td>{cidade}</td>
                                        <td>{estado}</td>
                                        <td>
                                            <StyledButton>
                                                <StyledButton>
                                                    <Button variant="secondary" size="sm" onClick={() => props.editUser(id, user)}>
                                                        <img src="./assets/icons8-edit.svg" width="15px"></img>
                                                    </Button>
                                                </StyledButton>
                                                <StyledButton>
                                                    <Button variant="danger" size="sm" onClick={() => props.deleteUser(id)}>
                                                        <img src="./assets/icons8-trash-can.svg" ></img>
                                                    </Button>
                                                </StyledButton>
                                            </StyledButton>
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
                </Table>
            </StyledTable>
            <PaginationBasic />
        </Container>
    )
}

export default UserTable;