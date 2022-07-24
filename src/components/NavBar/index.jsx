import CarWidget from '../CartWidget/index';
import React from 'react';


export const NavBar = () => {
    return ( 
        <div className="container">
            <nav className="nav">
                
                <div className="nav_brand">
                    <a className="nav_link" href="#">Marca por definir</a>
                </div>
                <ul className="nav_list">
                    <li>
                        <a className= "nav_link" href="#">Zapatillas</a>
                    </li>
                    <li>
                        <a className= "nav_link" href="#">Camisetas de futbol</a>
                    </li>
                    <li>
                        <a className= "nav_link" href="#">Ofertas</a>
                    </li>
                    <li>
                        <a className= "nav_link" href="#"><CarWidget /></a>
                    </li>
                </ul>

            </nav>
        </div> 
    );
}

export default NavBar;