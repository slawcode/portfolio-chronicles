import myResume from '../assets/myresume.png';
import React from 'react';
export default function Resume() {
    return (
        <div>
            <h1>Resume</h1>
            <p>
                Please view my resume to learn more about my previous work and educational experiences!
            </p>
            <p>Hoover over the text below to reveal a button to download my resume:
            </p>
            {/* Link to download my Resume */}
            <a href={myResume} target='_blank' rel='noopener norefererrer' className='btn' download>Download My Resume!</a>
        </div>

    )
};

// function ResumeLink() {
//      return ( 
//      <a href="myresume.png" target="_blank" rel="noreferrer"> View my resume </a> 
// ); 
// } 
// export default ResumeLink;
