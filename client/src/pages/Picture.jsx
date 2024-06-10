import React from'react';
import myprofilepicture from '../assets/myprofilepicture.jpeg'

// export default function Picture() {
//     return (
//         <div>
//             <h1>Picture Page</h1>
//             <p>
//                 This is the profile picture page!
//             </p>
//         </div>
//     )

// export default function Picture() {   
   const Picture = () => { 
    return (
        <div>
            <h2>Picture</h2>
            <img src={myprofilepicture} className='img-thumbnail'></img>
            <p className='py-1'>
                Hi! My name is Sheryl...
            </p>
        </div>
    );

};

export default Picture;