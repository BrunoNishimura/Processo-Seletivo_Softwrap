import React, {useState} from 'react';

const AddUserForm = (props) => {
    const initUser = {id: null, name: '', sobrenome: '', idade: '', estadoCivil:'', cpf:'', cidade:'', estado:''};

    const [user, setUser] = useState(initUser);

    const handleChange = e => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (user.name && user.sobrenome) {
            handleChange(e, props.addUser(user));
        }
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

            <button className="button-primary" type="submit" onClick={handleSubmit} >Add user</button>
        </form>
    )
}

export default AddUserForm;