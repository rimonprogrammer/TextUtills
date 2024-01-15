import React, { useState } from 'react';
import '../assets/Css/Navbar.css';
import '../assets/Css/About.css'
import Navbar from '../Component/Navbar';
import Alert from '../Component/Alert';

function AboutUs() {
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


    const [colorOption, setColorOption] = useState({
        display : 'none',
        backgroundColor:'aliceblue'
    });
    const [mode, setMode] = useState({
        color : 'black',
        backgroundColor : 'white'
    });
    const [aboutBody, setAboutBody] = useState({
      backgroundColor : 'rgb(94, 93, 92)'
    })
    const toggleMode = () =>{
    if(mode.backgroundColor === 'white'){
        setMode({
            color : 'white',
            backgroundColor : 'rgb(0, 2, 36)',
        },
        setAlert("dark mode enabled successfully"),
        show(),
        setAboutBody({backgroundColor:'white'})
        );
        setColorOption({display:'flex'});
        document.body.style.backgroundColor = 'rgb(94, 93, 92)';
    }
    else{
        setMode({
            color : 'black',
            backgroundColor : 'white'
        },
        setAlert("light mode enabled successfully"),
        show(),
        setAboutBody({backgroundColor:'rgb(94, 93, 92)'})
        );
        setColorOption({display:'none'});
        document.body.style.backgroundColor = 'white';
    }
}
//background color mode change

  return (
    <div className='about_Aria'>
       <Navbar mode={mode} toggleMode={toggleMode} colorOption={colorOption} home='Home' aboutUs='About-Us'/>
        <hr style={mode} />
        <Alert alert={alert} showAlert={showAlert} />
        <div style={aboutBody} className="container about_body">
            <h1 style={{color: aboutBody.backgroundColor === 'white'? 'black' : 'white'}}>About TextUtils</h1>
            
            {/* accordion start*/}
            <div className="accordion">
                <div className="accordion-item">
                    <h2 className='accordion-button bg-dark-subtle' data-bs-target='#collapseId1' data-bs-toggle='collapse' style={{cursor:'pointer'}}>What is TextUtils</h2>
                    <div className="accordion-collapse collapse" id='collapseId1'>
                        <div className="accordion-body">
                          <p>The term "textutils" typically refers to a collection of software utilities or tools designed to manipulate and process text. These utilities are often used in command-line environments or scripting to perform various text-related tasks. The exact functionality of textutils can vary, but they generally include commands or functions for tasks like text manipulation, searching, formatting, and analysis.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* accordion */}
            <div className="accordion">
                <div className="accordion-item">
                    <h2 className='accordion-button bg-dark-subtle' data-bs-target='#collapseId3' data-bs-toggle='collapse' style={{cursor:'pointer'}}>How work it?</h2>
                    <div className="accordion-collapse collapse" id='collapseId3'>
                        <div className="accordion-body">
                            <p>Textutils are command-line software tools for text manipulation. Users provide text data and specific commands with options. The tools process the text, execute the commands, and generate output based on the given instructions, making them essential for tasks like text searching, formatting, and analysis.</p>
                        </div>
                    </div>
                </div>
             </div>
            {/* accordion */}
            <div className="accordion">
                <div className="accordion-item">
                  <h2 className='accordion-button bg-dark-subtle' data-bs-target='#collapseId2' data-bs-toggle='collapse' style={{cursor:'pointer'}}>What include Textutils tools for tasks?</h2>
                    <div className="accordion-collapse collapse" id='collapseId2'>
                        <div className="accrodion-body">
                          <h4 className='ps-3'>Textutils might include tools for tasks such as:</h4>
                            <ul>
                                <li>The term "textutils" typically refers to a collection of software utilities or tools designed to manipulate and process text. These utilities are often used in command-line environments or scripting to perform various text-related tasks. The exact functionality of textutils can vary, but they generally include commands or functions for tasks like text manipulation, searching, formatting, and analysis.</li><br />
                                <li>Text formatting: Converting text between different formats, adjusting line lengths, or adding headers and footers.</li><br />
                                <li>Text searching and pattern matching: Searching for specific strings or patterns within text documents.</li><br />
                                <li>Text filtering and manipulation: Performing operations like text substitution, sorting, cutting, pasting, and rearranging text.</li><br />
                                <li>Text analysis: Counting words, characters, or lines; calculating statistics; or generating word clouds.</li><br />
                                <li>Regular expressions: Supporting regular expression search and replace operations.</li><br />
                                <li>The specific textutils available can depend on the operating system or software environment you are using. For example, Unix-like operating systems often include a set of text utilities like grep, sed, awk, cut, sort, and more, which collectively can be considered textutils.</li><br />
                                <li>The term "textutils" is relatively generic and can be used in different contexts, so its meaning can vary depending on the specific tools or software being referred to.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* accordion end */}
        </div>
    </div>
  )
}

export default AboutUs