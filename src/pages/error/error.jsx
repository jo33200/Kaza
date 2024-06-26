import './error.scss'
import { Link } from 'react-router-dom'

export default function Error() {    
    return (
        <div className="error">
            <h1>404</h1>
            <h2>Oups! La page que<span className="break"><br/></span> vous demandez n'existe pas. </h2>
            <Link to="/">Retourner sur la page d'accueil</Link>
        </div>
    )
}