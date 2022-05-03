import React, {useState} from 'react';


export default function TextForm(props) {

    const [text,setText] = useState('');

    const handleupClick=()=>{
        
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showalert('Changed to Upper Case!','success');
    }

    const handleloClick=()=>{

        let newtext = text.toLowerCase();
        setText(newtext);
        props.showalert('Changed to Lower Case!','success');
    }

    const handleonChange=(event)=>{
        setText(event.target.value);
    }

    const handleclClick=()=>{
        setText('');
        props.showalert('Cleared Textarea!','success');
    }

    const handleCopy=()=>{
        var copyText = document.getElementById("myBox");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        props.showalert('Text Copied!','success');
    }

    const handleSpace=()=>{
        var string = document.getElementById("myBox").value;    
        var newstr = string.replace(/\s{2,}/g, ' ').trim();
        document.getElementById("myBox").value = newstr;
        props.showalert('Extra space removed','success');
    }


    return (
        <>
            <div className="mb-3 my-3 container">
            <h1>{props.heading}</h1>
            <textarea className="form-control" style={props.mode} id="myBox" onChange={handleonChange} rows="8" value={text}></textarea>
            <button type="button" className="btn btn-primary my-3" onClick={handleupClick}>Convert to Uppercase</button>
            <button type="button" className="btn btn-primary my-3 mx-3" onClick={handleloClick}>Convert to Lowercase</button>
            <button type="button" className="btn btn-primary my-3" onClick={handleclClick}>Clear Text</button>
            <button className="btn btn-primary mx-3" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary" onClick={handleSpace}>Remove Extra Space</button>
            

            <h6>Text Summary:</h6>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.08*(text.split(" ").length)} minutes read</p>

            <h6>Preview:</h6>
            <p>{text.length<=0?'Enter to preview':text}</p>

            </div>

        </>
            

    )
}
