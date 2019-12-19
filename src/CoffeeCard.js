import React from 'react'
import { Component } from 'react'
import './CoffeeCard.css'
import { Card, Icon, Image, Button } from 'semantic-ui-react'

export default class CoffeeCard extends Component {
    render(){
        return(
            <Card>
                <Image src={this.props.coffee.img} wrapped ui={false} />
                <Card.Content>
                <Card.Header>{this.props.coffee.name}</Card.Header>
                <Card.Meta>{this.props.coffee.type}</Card.Meta>
                <Card.Description>
                    <Button basic color='brown'>See more Details</Button>
                </Card.Description>
                </Card.Content>
            </Card>
        )
    }
}