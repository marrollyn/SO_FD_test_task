import React from 'react';

// const Icon = ({ id , width="20", height="20"}) => {
//     return (
//         <svg width={width} height={height}>
//             <use xlinkHref={id}/>
//         </svg>
//     );
// };

const Icon = ({ Svg , width="20", height="20"}) => {
    return (
        <Svg 
        className="icon"
        width={width} 
        height={height}/>
    );
};

export default Icon;