import './App.css';
import React, {useState} from 'react';
import {marked} from 'marked'
import useLocalStorage from './useLocalStorage';

const App = () => {
  
  const [compiled, setCompiled] = useState('<h2 id="hello">Hello</h2>')
  const [code, setCode] = useLocalStorage('## Hello',compiled);

  const [hide, hidePreview] = useState(true)
  
  const openMD = () => {
    console.log(0)
    hidePreview(true)
  }

  const openPreview = () => {
    console.log(0)
    hidePreview(false)
  }
  const handleChange = (e) => {
    setCode(e.target.value)
    setCompiled(marked.parse(e.target.value))
  }

  return (
    <>
      <h1>MarkDown Previewer React App</h1>
      <div className="container">
        <div className="btns">
          <button onClick={openMD} className="tab-btn active" data-tab="markdow">MarkDown</button>
          <button onClick={openPreview} className="tab-btn" data-tab="preview" >Preview</button>
          <button onClick={openPreview} className="tab-btn" data-tab="docs" >Docs</button>
        </div>
        {
        hide ? 
          <div>
            <textarea onChange={handleChange} value={code}/>
          </div> : 
          <div>
            <textarea value={compiled}/>
          </div>
        }
      </div>
    </>
  )
}


export default App;
