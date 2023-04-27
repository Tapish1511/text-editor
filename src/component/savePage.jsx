import React, { useEffect, useState } from "react";
import styles from '../css/main.module.css'
import { Navigate } from "react-router";

function RenderFiles(){
    const [items, setItems] = useState([]);
    const [goToEditor, setGoToEditor] = useState(false);

    useEffect(()=>{

        const getAllData = localStorage.getItem('content');
        let newItems = JSON.parse(getAllData);
        setItems(newItems);

    }, [])

    function openEditor(e, ele){
        // e.preventDefault();
        localStorage.setItem('current', JSON.stringify(ele));
        setGoToEditor(true);
    }


    return (
        <div>
            {goToEditor && <Navigate to='/'/>}
            {items.map((ele, index)=>{
                return <div key={index} className={styles.listItems}> 
                    <li>{ele.title}</li>
                    <button onClick={(e)=>openEditor(e, ele)}>open</button>
                </div>
            })}
        </div>
    )
}


export default RenderFiles;