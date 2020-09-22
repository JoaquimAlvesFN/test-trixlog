import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaRoute, FaRoad, FaSignOutAlt } from "react-icons/fa";

import './template.css';

function Template({children}) {
    const history = useHistory();

    const logout = () => {
        // Sair da aplicação...
        history.push('/');
    }

    return (
        <div className="template-container">
            <sidebar>
                <div className="template-sidemenu">
                    <Link to="/listRoutes">
                        <FaRoad size={30} color="#FFF" className="template-icons" title="List Routes"/>
                    </Link>
                    <Link to="addRoutes">
                        <FaRoute size={30} color="#FFF" className="template-icons" title="Add Routes"/>
                    </Link>
                    <FaSignOutAlt 
                        size={30} 
                        color="#FFF" 
                        className="template-icons" 
                        title="Logout" 
                        onClick={logout}
                    />
                </div>
                {children}
            </sidebar>
        </div>
    );
}

export default Template;