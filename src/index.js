import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'

const myObject = {
    thing1 : 'red',
    thing2 : 'blue',
}


const { thing1 } = myObject;

console.log(thing1)



ReactDOM.render(
    <App />, 
    document.getElementById('root')
)
