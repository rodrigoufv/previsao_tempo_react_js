import React from "react";
import Search from "./Search";

import "../styles/Header.css";

export default function Header({ searchCity }) {
    return ( <header className = "Header" >            
            <p className = "Header__subtitle" > <strong>Seja bem vindo</strong> </p> 
            <p className = "Header__title" > <em>Selecione uma cidade</em> </p> 
            <Search searchCity = { searchCity }/> 
        </header>
    );
}