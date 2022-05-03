import './App.css';
import Navbar from './components/Navbar';
import Privacy from './components/Privacy';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  Router,
} from "react-router-dom";

function App() {
  const [mode,setmode] = useState({
    nav:'light',
    backgroundColor:'white',
    color:'black'
  });
  const [alert,setalert] = useState(null);

  const showalert = (message,type) =>{
    
    setalert({
      msg:message,
      type:type
    }); 

    setTimeout(() => {
      setalert(null);
    }, 2000);
  }

  const togglemode = (event)=>{

    let theme = event.target.value;
    
    if(theme === 'dark'){
      showalert('Dark mode enabled','success');
      setmode({
        nav:'dark',
        backgroundColor:'black',
        color:'white'
      })

      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      document.title = 'Text Formatter - Dark Mode';

    }else if(theme === 'vibrant'){
      showalert('Vibrant mode enabled','success');
      setmode({
        nav:'light',
        backgroundColor:'#FDD20EFF',
        color:'red',
      
      })

      document.body.style.backgroundColor = "yellow";
      document.body.style.color = "blue";
      document.title = 'Text Formatter - Vibrant Mode';

    }else if(theme === 'monochrome'){
      showalert('Vibrant mode enabled','success');
      setmode({
        nav:'light',
        backgroundColor:'#ccc',
        color:'#666',
      
      })

      document.body.style.backgroundColor = "#ccc";
      document.body.style.color = "#666";
      document.title = 'Text Formatter - Monochrome Mode';
      
    }else if(theme === 'gradient'){
      showalert('Gradient mode enabled','success');
      setmode({
        nav:'light',
        backgroundColor:'cyan',
        color:'#000',
      
      })

      document.body.style.backgroundColor = "cyan";
      document.body.style.color = "#000";
      document.title = 'Text Formatter - Gradient Mode';
      
    }else if(theme === 'default'){
      showalert('Default mode enabled','success');
      setmode({
        nav:'light',
        backgroundColor:'white',
        color:'#000',
      
      })

      document.body.style.backgroundColor = "white";
      document.body.style.color = "#000";
      document.title = 'Text Formatter - Default Mode';
      
    }
    
  }

  return (
    <>
      <BrowserRouter>
      <Navbar title="Text Formatter" mode={mode} togglemode={togglemode} />
      <Alert alert={alert} />
      <Routes>
        <Route path="/" element={<TextForm showalert={showalert} mode={mode}></TextForm>} />
        <Route path="/privacy" element={<Privacy mode={mode} />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
