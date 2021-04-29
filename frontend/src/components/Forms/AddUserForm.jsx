import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ADD8E6;
    border-radius: 1px 1px 20px 20px;
    padding: 32px;
    height: 370px;
    width: 820px;

    box-shadow: 10px 5px 5px #ccc;
`;

const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const InputContainer = styled(StyledContainer)`
    flex-direction: column;
    width: ${(props) => props.width};
    padding: 4px;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 16px;
`;

const AddUserForm = (props) => {
    const initUser = { id: null, name: '', sobrenome: '', idade: '', estadoCivil: '', cpf: '', cidade: '', estado: '' };

    const [user, setUser] = useState(initUser);

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (user.name && user.sobrenome && user.idade && user.estadoCivil && user.cpf && user.cidade && user.estado) {
            handleChange(e, props.addUser(user));
        }
    }

    return (

        <Container>
            <Form>
                <StyledContainer>
                    <InputContainer width='180px'>
                        <Form>Nome</Form>
                        <Form.Control type="text" value={user.name} name="name" onChange={handleChange} />
                    </InputContainer>

                    <InputContainer width='250px'>
                        <Form>Sobrenome</Form>
                        <Form.Control className="u-full-width" type="text" value={user.sobrenome} name="sobrenome" onChange={handleChange} />
                    </InputContainer>

                    <InputContainer width='90px'>
                        <Form>Idade</Form>
                        <Form.Control className="u-full-width" type="number" value={user.idade} name="idade" onChange={handleChange} />
                    </InputContainer>
                </StyledContainer>

                <StyledContainer>
                    <InputContainer width='180px'>
                        <Form>CPF</Form>
                        <Form.Control type="text" value={user.cpf} name="cpf" onChange={handleChange} />
                    </InputContainer>

                    <InputContainer width='340px'>
                        <Form>Estado Civil</Form>
                        <Form.Control className="u-full-width" as="select" value={user.estadoCivil} name="estadoCivil" onChange={handleChange} custom>
                            <option>...</option>
                            <option>Solteiro(a)</option>
                            <option>Casado(a)</option>
                            <option>Divorciado(a)</option>
                            <option>Viúvo(a)</option>
                        </Form.Control>
                    </InputContainer>
                </StyledContainer>

                <StyledContainer>
                    <InputContainer width='180px'>
                        <Form>Cidade</Form>
                        <Form.Control className="u-full-width" type="text" value={user.cidade} name="cidade" onChange={handleChange} />
                    </InputContainer>

                    <InputContainer width='90px'>
                        <Form>Estado</Form>
                        <Form.Control className="u-full-width" type="text" value={user.estado} name="estado" onChange={handleChange} />
                    </InputContainer>
                </StyledContainer>

                <ButtonContainer>
                    <Button className="button-primary" type="submit" onClick={handleSubmit} >Add user</Button>
                </ButtonContainer>
            </Form>
        </Container >
    )
}

export default AddUserForm;