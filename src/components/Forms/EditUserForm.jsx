import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';
import { Container, ButtonContainer, InputContainer, StyledContainer } from './styles';

const EditUserForm = (props) => {
    useEffect(() => {
        setUser(props.currentUser)
    }, [props])

    const [user, setUser] = useState(props.currentUser);

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (user.name && user.sobrenome) props.updateUser(user);
    }

    return (
        <Container color='#d9bfd9'>
            <Form>
                <StyledContainer>
                    <InputContainer width='430px'>
                        <Form>Nome Completo</Form>
                        <Form.Control type="text" value={user.name} name="name" onChange={handleChange} />
                    </InputContainer>

                    {/* <InputContainer width='250px'>
                        <Form>Sobrenome</Form>
                        <Form.Control className="u-full-width" type="text" value={user.sobrenome} name="sobrenome" onChange={handleChange} />
                    </InputContainer> */}

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
                    <Button type="submit" onClick={handleSubmit} >Edit user</Button>
                    <Button variant="danger" type="submit" onClick={() => props.setEditing(false)} >Cancel</Button>
                </ButtonContainer>
            </Form>
        </Container>
    )
};

export default EditUserForm;