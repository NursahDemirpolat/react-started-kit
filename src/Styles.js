import logo from "./logo.svg"
import React, { useEffect } from "react";
import Test from "./Test";
import { Title } from "./Components.js";
import Bootstrap from "./Bootstrap";
import Tailwind from "./Tailwind";

//import './tailwind.css'
import './style.scss'
import styles from './App.module.css'


function Styles(){
    return(
        <div className={styles.App}>
        <Title>{process.env.NODE_ENV}</Title>
        <Title theme="dark">{process.env.NODE_ENV}</Title>
        <p className="env"> 
          {process.env.REACT_APP_API_URL}
          <span>test</span>
        </p>
        <Test></Test>
        {process.env.NODE_ENV === 'production' && (
          <>
            <img src="/logo192.png" alt="/"></img>
            <img src={logo} alt=""></img>   
          </>
        )}
        <Bootstrap/>
        <Tailwind/>
      </div>
    );
}

export default Styles