import React from 'react'
import { render } from '@testing-library/react';

const Title = ({isPlayin, playOnClick}) => {
    if(isPlayin)
    {
        return  <div>
                <h1 style={{textAlign:'center'}}>Old Man Life</h1>
                <button onClick={playOnClick}>Play</button>
                </div>
    }
    else
        return <div></div>

}

export default Title;