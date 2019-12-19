import React from 'react'
import { Component } from 'react'
import { Button, Input, Icon } from 'semantic-ui-react'
import './LandingPage.css'
import NavBar from './NavBar'
import CoffeeCard from './CoffeeCard'

class LandingPage extends Component {
    constructor(){
        super()
        this.state = {
            coffeeBlends: [
            {
                name: 'Primavera Blend',
                type: 'medium',
                img: 'https://www.stickpng.com/assets/images/580b57fbd9996e24bc43c0ef.png'
            },
            {
                name: 'Mahogany Blend',
                type: 'dark',
                img: 'http://www.aljanh.net/data/archive/img/1538624802.png'
            }, 
            {
                name: 'Ash Blend',
                type: 'light',
                img: 'https://www.stickpng.com/assets/images/580b57fbd9996e24bc43c0ec.png'
            }
            ]
        }
    }

    displayCoffeeCards = () => {
        return this.state.coffeeBlends.map((coffee => (<CoffeeCard coffee={coffee}/>)))
    }

    render(){
        return(
            <>
            <NavBar/>
            <div className="free-trial-shop-panel"> 
                <div className="free-trial-left-panel">
                    <h1 className="title-text">Enjoy a hot cuppa?</h1>
                    <h3 className="title-subtext">Start a free trial of our 3 roasts, on us.</h3>
                    <Button color="teal">Shop our favorites</Button>
                    <Button color="teal">Start free trial</Button>
                </div>
                <img className="coffee-shop-image"src="https://media.architecturaldigest.com/photos/5b083d5b75a4f940de3da8f3/master/w_1742,h_1162,c_limit/RARTOFCOFFEE-iksdesign-03.jpg"/>
            </div>
            <div className="coffee-shop-promise-panel">
                <img className="coffee-bag-container-image" src='https://cdn.shopify.com/s/files/1/1566/9911/files/Printers-row-coffe-shop-black-and-white-interior_1024x1024.jpg?v=1526140167'/>
                <div className="coffee-shop-right-panel">
                    <h1>Our Coffeehouse. Our Neighborhood.</h1>
                    <h2>Bringing you fresh coffee from source to table since 1985. Organic, free-trade, and locally-owned. </h2>
                </div>
            </div>
            <div className="organically-sourced-panel">
                <h1 className="organically-sourced-h1">Organically sourced beans</h1>
                <div className="coffee-card-container">
                    {this.displayCoffeeCards()}
                </div>
            </div>
            <div className="email-updates">
                <h1 className="inverted-h1-font"> Sign up for more news, coupons, and updates</h1>
                <h3 className="inverted-h3-font">Let us know you're on the newsletter and receive 1$ off your next drink.</h3>
                <div className='email-field'>
                    <Input iconPosition='left' placeholder='Email'>
                        <Icon name='at' />
                        <input />
                    </Input>
                    <Button color='teal'>Submit</Button>
                </div>
            </div>
            </>
        )
    }
}

export default LandingPage