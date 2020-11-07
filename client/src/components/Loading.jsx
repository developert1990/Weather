// Loading spinner
import React from 'react';
import ReactLoading from 'react-loading';


export const Loading = ({ color = 'white' }) => {
    return (
        <>
            {/* type: blank, balls, bars, bubbles, cubes, cylon, spin, spinningBubbles, spokes */}
            <ReactLoading type='spokes' color={color} height={80} width={80} />
        </>
    )
};


//Spokes, Spin