import React from'react';
import projectone from '../assets/myproject1.png';
import projecttwo from '../assets/myproject2.png';
import projectthree from '../assets/myproject3.png';
import projectfour from '../assets/myproject4.png';
import projectfive from '../assets/myproject5.png';
import projectsix from '../assets/myproject6.png';

// export default function Projects() {
//     return (
//         <div>
//             <h1>Projects</h1>
//             <p>
                
//             </p>
//         </div>
//     );
// }
const Projects = () => { 
    return (
        <div>
            <h2>Projects</h2>
            <img src={projectone} className='img-thumbnail'></img>
            <p className='py-1'>
                This was my very first complete coding project ever! I was able to successfully implement the pre course work to create a static one page study guide application.
            </p>
            <a href="https://slawcode.github.io/prework-study-guide/"></a>
            <img src={projecttwo} className='img-thumbnail'></img>
            <p className='py-1'>
                The 'Password Generator' assignment was my first coding application utilizing JavaScript. After much trial and error, this project aided my understanding of the fundamentals.
            </p>
            <a href=""></a>
            <img src={projectthree
            } className='img-thumbnail'></img>
            <p className='py-1'>
                The SVG Logo Maker I created implemented object oriented programming. It was a fun a project, especially when complete, and being able to generate custom logos!
            </p>
            <a href=""></a>
            <img src={projectfour} className='img-thumbnail'></img>
            <p className='py-1'>
                During the group assignment for project one my group and I created Harmony Hub! A unique space to foster positivity, tranquility and fun! This project utilized HTML, CSS, JavaScript and API's.
            </p>
            <a href=""></a>
            <img src={projectfive} className='img-thumbnail'></img>
            <p className='py-1'>
                For project two my group and I created a student dashboard. I took on the implementation of a new library and utilized Multer to upload a profile picture to our student account. 
            </p>
            <a href=""></a>
            <img src={projectsix} className='img-thumbnail'></img>
            <p className='py-1'>
                The "Express Note Taker" assignment used Express.js to save and delete notes. It was a fun assignment and an application I could access in a browser anywhere! I enjoyed working on the routes and learned an important lesson about the placement of the wild card!
            </p>
        </div>
    );
};

export default Projects;