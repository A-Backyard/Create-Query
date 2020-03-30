
import React from 'react'

const Wrapper = ({children}) => {
    return(
        <div style = {{width: '100%', position: 'absolute'}}>
            {children}
        </div>
    )
}

export default Wrapper