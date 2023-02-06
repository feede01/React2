import React from 'react'
import { Pinwheel } from '@uiball/loaders'

function Loader() {
    return (
        <Pinwheel 
            size={100}
            lineWeight={3.5}
            speed={1} 
            color="blueviolet" 
        />
    )
}

export default Loader