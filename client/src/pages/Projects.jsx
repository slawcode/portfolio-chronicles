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
            <img src={projecttwo} className='img-thumbnail'></img>
            <p className='py-1'>
                Hi! My name is Sheryl...
            </p>
            <img src={projectthree
            } className='img-thumbnail'></img>
            <p className='py-1'>
                Hi! My name is Sheryl...
            </p>
            <img src={projectfour} className='img-thumbnail'></img>
            <p className='py-1'>
                Hi! My name is Sheryl...
            </p>
            <img src={projectfive} className='img-thumbnail'></img>
            <p className='py-1'>
                Hi! My name is Sheryl...
            </p>
            <img src={projectsix} className='img-thumbnail'></img>
            <p className='py-1'>
                Hi! My name is Sheryl...
            </p>
        </div>
    );
};

export default Projects;