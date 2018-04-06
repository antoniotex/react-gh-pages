import React from 'react'
import { Link } from 'react-router-dom'
import './css/menu.css'

const Menu = props => {
    return (
        <div id='menu'>
            <header>
                <nav>
                    <div className='menu-icon'>
                        <i className='fa fa-bars fa-2x'></i>
                    </div>
                    <div className='menu showing'>
                        <ul>
                            <li>
                                <Link to="/">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/sobre">
                                    Sobre
                                </Link>
                            </li>
                            <li>
                                <Link to="/servicos">
                                    Serviços
                                </Link>
                            </li>
                            <li>
                                <Link to="/contato">
                                    Contato
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    )
}
export default Menu