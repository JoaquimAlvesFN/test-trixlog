import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    const login = (e) => {
        e.preventDefault();

        history.push('/listRoutes');

        setEmail('');
        setPassword('');
    }

    return (
        <div className="container-login">
            <div className="form-login">
                <form onSubmit={login}>
                    <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                    <input placeholder="Senha" type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button>Entrar</button>
                </form>
            </div>
        </div>
    );
}

export default Login;