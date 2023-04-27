import React, {useEffect, useRef, useState} from "react";
import JoditEditor from 'jodit-react';
import styles from '../css/main.module.css'

function Editor({placeholder}){
    const editor = useRef(null);
    const title = useRef('')
  // const file = useRef(null);
    const [data, setData] = useState('');
	const [content, setContent] = useState('');
	const config ={
			readonly: false, // all options from https://xdsoft.net/jodit/docs/,
			placeholder: placeholder || 'Start typings...'
            
            
	}

    useEffect(()=>{
      const getCurrentData = localStorage.getItem('current');
      if(getCurrentData) setData(JSON.parse(getCurrentData));

    }, [])

    useEffect(()=>{
        if(data.title) {
            title.current.value = data.title;
            setContent(data.content);
    
          }
    }, [data])
    
    function saveData(e){
        e.preventDefault();
        const time = new Date().toLocaleTimeString();
        let _title = null;
        if(!title.current.value){
            _title = time;
        }
        else{
            _title = title.current.value;
        }
        const data = {
            title: _title,
            content: content
        }
        const getData = localStorage.getItem('content');
        let items= JSON.parse(getData);
        if(!getData){
            items = [];
        }

        items.filter(ele=> ele.title != _title);
        items.push(data);
        localStorage.setItem('content', JSON.stringify(items));
    }

	return (
    <form action="">
        <div className={styles.Title}>

            <label htmlFor="title">title</label>
            <input type="text" name="title" id="title" ref={title}/>
        </div>
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        tabIndex={1} // tabIndex of textarea
        onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
        onChange={newContent => {}}

        />
        <div className={styles.saveButton}>
        <button className={styles.btn} onClick={saveData}>Save</button>
      </div>
      </form>
	);
}


export default Editor;