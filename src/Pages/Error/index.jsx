import React from "react";
import { Link } from "react-router-dom";

import './error.scss'

function ErrorPage() {
    return (<React.Fragment>
    <div className="Content">
        <span className="ErrorCode">404</span>
        <span className="Message">Oups! La page que vous demandez n'existe pas.</span>
        <Link to='/'>Retourner à la page d'accueil</Link>
    </div>
    </React.Fragment>)
}

export default ErrorPage;