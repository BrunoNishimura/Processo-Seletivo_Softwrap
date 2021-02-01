import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Form, Col } from 'react-bootstrap';

const EditUserForm = (props) => {

    useEffect(() => {
        setUser(props.currentUser)
    }, [props])

    const [user, setUser] = useState(props.currentUser);

    const handleChange = e => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
        }

    const handleSubmit = e => {
        e.preventDefault();
        if (user.name && user.sobrenome) props.updateUser(user);
    }

    return (
        <form>
            <label>Nome</label>
            <input className="u-full-width" type="text" value={user.name} name="name" onChange={handleChange} />
            
            <label>Sobrenome</label>
            <input className="u-full-width" type="text" value={user.sobrenome} name="sobrenome" onChange={handleChange} />
            
            <label>Idade</label>
            <input className="u-full-width" type="text" value={user.idade} name="idade" onChange={handleChange} />
            
            <label>CPF</label>
            <input className="u-full-width" type="text" value={user.cpf} name="cpf" onChange={handleChange} />
            
            <label>Estado Civil</label>
            <input className="u-full-width" type="text" value={user.estadoCivil} name="estadoCivil" onChange={handleChange} />
            
            <label>Cidade</label>
            <input className="u-full-width" type="text" value={user.cidade} name="cidade" onChange={handleChange} />

            <label>Estado</label>
            <input className="u-full-width" type="text" value={user.estado} name="estado" onChange={handleChange} />

            <button className="button-primary" type="submit" onClick={handleSubmit} >Edit user</button>
            <button type="submit" onClick={() => props.setEditing(false)} >Cancel</button>
        </form>
    )
}

export default EditUserForm;