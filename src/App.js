import React, {useState, useRef, useEffect} from "react";
import styles from './css/main.module.css';
import Editor from "./component/textEditor";
import RenderFiles from "./component/savePage";
import { Link, Routes, Route, Navigate} from "react-router-dom";

function App() {


  return(
    <div className={styles.container}>
       <nav className={styles.nav}>
        <h2>Text-editor</h2>
        <ul className={styles.navItems}>
          <li><Link to={'/saved-files'} className={styles.links}>saved files</Link></li>
          <li><Link to={'/'}  className={styles.links}> code </Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Editor placeholder={'type here'}/>}/>
        <Route path="/saved-files" element={<RenderFiles />}/>
      </Routes>

    </div>
  );
  
};

export default App;
