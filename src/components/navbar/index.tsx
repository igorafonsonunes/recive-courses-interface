import React from "react";
import { Link } from "react-router-dom";
import '../navbar/navbar.css';

export default function NavBar(){
    return (
        <div id="navBar">
            <ul>
                <li><p>Recive Courses</p></li>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>                    
                    <Link to="/register">Cadastrar cursos</Link>
                </li>
            </ul>
        </div>
    );
}