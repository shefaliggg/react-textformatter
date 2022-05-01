import './App.css';
import Navbar from './components/Navbar';
import Privacy from './components/Privacy';
import TextForm from './components/TextForm';
import React, {useState} from 'react';

function App() {
  const [mode,setmode] = useState('light');

  const togglemode = ()=>{
    if(mode == 'light'){
      setmode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
    }else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }

  return (
    <>
      <Navbar mode={mode} togglemode={togglemode} />
      <div className="container">
        <TextForm heading="Text Formatter" mode={mode} />
      </div>
      <Privacy/>
    </>
  );
}

export default App;
