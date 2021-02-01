import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Form, Col } from 'react-bootstrap';


const AddUserForm = (props) => {
    const initUser = {id: null, name: '', sobrenome: '', idade: '', estadoCivil:'', cpf:'', cidade:'', estado:''};

    const [user, setUser] = useState(initUser);

    const handleChange = e => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
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
                <Form.Row className="justify-content-md">
                    <Form.Group>
                        <Col>
                            <Form.Label>Nome</Form.Label>
                            <Form.Control className="u-full-width" type="text" value={user.name} name="name" onChange={handleChange} />
                        </Col>
                    </Form.Group>

                    <Form.Group>
                        <Col>
                            <Form.Label>Sobrenome</Form.Label>
                            <Form.Control className="u-full-width" type="text" value={user.sobrenome} name="sobrenome" onChange={handleChange} />                        
                        </Col>
                    </Form.Group>

                    <Form.Group>                        
                            <Form.Label>Idade</Form.Label>
                            <Form.Control className="u-full-width" type="number" value={user.idade} name="idade" onChange={handleChange} />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group>
                        <Form.Label>CPF</Form.Label>
                        <Form.Control className="u-full-width" type="text" value={user.cpf} name="cpf" onChange={handleChange} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="Form.SelectCustom">
                        <Form.Label>Estado Civil</Form.Label>
                        <Form.Control className="u-full-width" as="select" value={user.estadoCivil} name="estadoCivil" onChange={handleChange} custom>
                            <option>...</option>
                            <option>Solteiro(a)</option>
                            <option>Casado(a)</option>
                            <option>Divorciado(a)</option>
                            <option>Viúvo(a)</option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group>
                        <Form.Label>Cidade</Form.Label>
                        <Form.Control className="u-full-width" type="text" value={user.cidade} name="cidade" onChange={handleChange} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Estado</Form.Label>
                        <Form.Control className="u-full-width" type="text" value={user.estado} name="estado" onChange={handleChange} />
                    </Form.Group>
                    
                </Form.Row>
                        <Button className="button-primary" type="submit" onClick={handleSubmit} >Add user</Button>
        </Form>
        </Container>
    )
}

export default AddUserForm;