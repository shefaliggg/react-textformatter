import React,{useState} from 'react'

export default function Privacy() {

    const darkmode=() =>{
        
        if(mystyle.color == 'black'){
            
            setstyle({
                backgroundColor: 'black',
                color: 'white'
            });

            setbtntxt('White Mode');

        }else{
            setstyle({
                backgroundColor: 'white',
                color: 'black'
            });

            setbtntxt('Dark Mode');
        }
        
    }

    const[btntxt,setbtntxt] = useState('Dark Mode');

    const[mystyle,setstyle]= useState(
        {
            backgroundColor: 'white',
            color: 'black'
        }
    );
    

  return (
    <div className='container' style={mystyle}>
        <h1>Privacy</h1>
        <h4>Text Formatter values your privacy</h4>
        <p>The text formatting tools on Text formatter make use of JavaScript technology. 
        This means that all of your text is kept locally on your own machine and does not get sent out to the Internet, making it impossible for anyone to get hold of it.
        Furthermore, we do not create or read cookies so your anonymity is secure.</p>
        <button className="btn btn-primary" onClick={darkmode}>{btntxt}</button>
    </div>

  )
}
