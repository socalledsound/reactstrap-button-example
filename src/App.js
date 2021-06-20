import React, { Component } from 'react';
// import MyButtonClass from './MyButtonClass'
import MyButton from './MyButton'

const containerStyle = {
    display: 'flex', 
    width: '100vw', 
    padding: '2rem', 
    backgroundColor: '#000066', 
    color: 'white'
}

const buttonLabels = ['one', 'two', 'three']

class App extends Component {
    state = { 
        toggledVals : Array(buttonLabels.length).fill(false)
     }

     toggleButton = (buttonIndex) => {
         const { toggledVals } = this.state
         console.log(toggledVals)
         const newToggledVals = toggledVals.map((item, idx) => {
            if(idx !== buttonIndex){
                return item
            } else {
                return !item
            }
         });
         this.setState({toggledVals : newToggledVals})
     }

    render() { 
        return ( 
            <div 
                className="container" 
                style={containerStyle } >
                {
                    buttonLabels.map((label, index) => 

                        <MyButton key={index} index={index} label={label} toggledVals={this.state.toggledVals}updateParent={this.toggleButton}/>
                )
                }
                

                {/* <Button 
                    color={this.state.toggled ? 'danger' : 'primary'}
                    style={{margin: 'auto'  } }
                    onClick={this.toggleButton}
                >
                    {this.state.toggled ? 'dangerous one' : 'one'}
                </Button> */}

            </div>
         );
    }
}
 
export default App;