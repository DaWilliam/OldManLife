import React from 'react'
import { render } from '@testing-library/react';

const Title = ({=playOnClick}) => {
    return  <div>
            <h1 style={{textAlign:'center'}}>Old Man Life</h1>
            <button onClick={playOnClick}>Play</button>
            </div>


export default Title;