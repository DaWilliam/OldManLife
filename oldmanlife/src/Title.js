import React from 'react'
import { render } from '@testing-library/react';

const Title = ({playOnClick}) => {
    return  <div>
            <h1 style={{textAlign:'center', fontSize:'100px'}}>Old Man Life</h1>
            <button className="Title" style={{textAlign:'center', fontSize:'50px', fontFamily:'arial', padding:'10px 20px', color:'black', borderRadius:'10px', borderColor:'blue'}} onClick={playOnClick}>Play</button>
            </div>
}

export default Title;