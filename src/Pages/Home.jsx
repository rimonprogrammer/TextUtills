import React, { useState } from 'react';
import Navbar from './../Component/Navbar';
import Alert from '../Component/Alert';
import '../assets/Css/Home.css';

function Home() {
        // alert aria
        const [alert, setAlert] = useState('Light Mode enable');
        const [showAlert, setShowAlert] = useState({
           display : 'none' 
        })
        const show = () =>{
            if(showAlert.display === 'none'){
                setShowAlert({
                    display : 'block' 
                })
                setTimeout(() => {
                    setShowAlert({
                        display : 'none'
                    })
                }, 1300); 
            }
        }

        // alert aria

    //background color mode change
    // const [colorOption, setColorOption] = useState({
    //     display : 'none',
    //     backgroundColor:'aliceblue'
    // });
    const [mode, setMode] = useState({
        color : 'black',
        backgroundColor : 'white'
    });
    const toggleMode = () =>{
        if(mode.backgroundColor === 'white'){
            setMode({
                color : 'white',
                backgroundColor : 'rgb(0, 2, 36)'
            }, 
            setAlert("dark mode enabled successfully"),
            show(),
            document.title = 'TextUtils -- Dark mode Enable'
            );

            setMenu({color:'white'});
            setHrBg({color : 'white'});
        }
        else{
            setMode({
                color : 'black',
                backgroundColor : 'white'
            },
            setAlert("light mode enabled successfully"),
            show(),
            document.title = 'TextUtils -- Light mode Enable'
            );
            setMenu({color:'black'});
            setHrBg({color : 'black'});
        }
    }
    //background color mode change



    // textUtils functionality
    const [text, setText] = useState("");
    const changeText = (e) =>{
        setText(e.target.value);
    }

    const upperCase = () =>{
        setText(text.toLocaleUpperCase());
        setAlert("Text UpperCase successfully");
        show();
        document.title = 'TextUtils -- Text UpperCase';
        setTimeout(()=>{
            document.title = 'TextUtils | Word counter | Character Counter | LowerCase to UpperCase | UpperCase to LowerCase'
        },2000);
    }
    const lowerCase = () =>{
        setText(text.toLocaleLowerCase());
        setAlert("Text LowerCased successfully");
        show();
        document.title = 'TextUtils -- Text LowerCase';
        setTimeout(()=>{
            document.title = 'TextUtils | Word counter | Character Counter | LowerCase to UpperCase | UpperCase to LowerCase'
        },2000);
    }
    const spaceRemove = () =>{
        const spaceText = text.split(/[ ]+/);
        setText(spaceText.join(" "));
        setAlert("Text Space Removed successfully");
        show();
        document.title = 'TextUtils -- Text Space Removed';
        setTimeout(()=>{
            document.title = 'TextUtils | Word counter | Character Counter | LowerCase to UpperCase | UpperCase to LowerCase'
        },2000);
    }
    const copyBtn = () =>{
        const textBox = document.getElementById('textBox');
        textBox.select();
        navigator.clipboard.writeText(textBox.value);
        setAlert("Text Copyed successfully");
        show();
        document.title = 'TextUtils -- Text Copy';
        setTimeout(()=>{
            document.title = 'TextUtils | Word counter | Character Counter | LowerCase to UpperCase | UpperCase to LowerCase'
        },2000);
    }
    const clearText = () =>{
        setText('');
        setAlert("Text Cleared successfully");
        show();
        document.title = 'TextUtils -- Text Clear';
        setTimeout(()=>{
            document.title = 'TextUtils | Word counter | Character Counter | LowerCase to UpperCase | UpperCase to LowerCase'
        },2000);
    }
    // textUtils functionality


  return (
    <div style={mode} className='body'>
        <Navbar mode={mode} toggleMode={toggleMode} home='Home' aboutUs='About-Us'/>
        <hr />
        <Alert alert={alert} showAlert={showAlert} />

        <div className="container">
            <div className='box_aria'>
                <h3>Try TextUtils | Word counter- Character counter- Remove extra spaces🙂</h3>
                <textarea onChange={changeText} id='textBox' value={text} className='form-control' rows="5" placeholder='Enter text here...'></textarea>
                <button disabled={text.length ===0} onClick={upperCase} className='btn btn-primary mt-3'>Text UpperCase</button>
                <button disabled={text.length ===0} onClick={lowerCase} className='btn btn-primary mt-3 ms-2'>Text LowerCase</button>
                <button disabled={text.length ===0} onClick={spaceRemove} className='btn btn-warning mt-3 ms-2'>Remove Extra Space</button>
                <button disabled={text.length ===0} onClick={copyBtn} className='btn btn-success mt-3 ms-2'>Copy to clipboard</button>
                <button disabled={text.length ===0} onClick={clearText} className='btn btn-danger mt-3 ms-2'>Clear Text</button>
            </div>
        </div>
        <div className="container">
            <div className="box_aria mt-4">
                <h2>Your Text Summary🙂</h2>
                <p className='box_Aria_p'>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words and {text.length} characters</p>
                <p className='box_Aria_p'>{text.trim() === "" ? 0 :( 0.008 * text.split(' ').length)} Minute need to read</p>
                <h3>Preview</h3>
                <p className='box_Aria_p'>{text.length > 0? text : 'Nothing to preview🥲'}</p>
            </div>
        </div>
    </div>
  )
}

export default Home