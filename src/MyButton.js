import React from 'react'
import { Button } from 'reactstrap'
const MyButton = ({ index, label, updateParent, toggledVals}) => {
    const any = toggledVals.filter(val => val === true)
    return ( 
        <div>
                                <Button 
                        key={`dangerButton${index}`} 
                        color={toggledVals[index] ? 'danger' : 'primary'}
                        style={{margin: 'auto'  } }
                        onClick={() => updateParent(index)}
                    >
                       
                        {toggledVals[index] ? `dangerous ${label}` : (any.length > 0) ? 'uh oh' : `${label}`}
                    </Button>
        </div>
     );
}
 
export default MyButton;