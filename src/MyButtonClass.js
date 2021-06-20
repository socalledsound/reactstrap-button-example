import React, { Component } from 'react'
import { Button } from 'reactstrap'

class MyButtonClass extends Component{

    state = {
        toggled : false
    }

    toggle = () => {
        this.setState({toggled : !this.state.toggled})
    }

render(){
    const { index, label } = this.props
    return ( 
        <div>
                <Button 
                        key={`dangerButton${index}`} 
                        color={this.state.toggled ? 'danger' : 'primary'}
                        style={{margin: 'auto'  } }
                        onClick={this.toggle}
                    >
                       
                        {this.state.toggled ? `dangerous ${label}` : `${label}`}
                    </Button>
        </div>
     );
}

} 

 
export default MyButtonClass;