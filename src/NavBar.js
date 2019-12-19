import React from 'react'
import { Component } from 'react'
import './NavBar.css'

export default class Navbar extends Component {
    render(){
        return(
        <div class="ui top fixed menu">
        <div class="item">
            <img className="coffee-logo" src="https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c550.png"/>
            Seneca Coffeehouse
        </div>
        <a class="item">Shop now</a>
        </div>
        )
    }
}
