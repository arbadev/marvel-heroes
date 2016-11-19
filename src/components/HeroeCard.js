import React, { Component } from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import Avatar from 'material-ui/Avatar'
import {red500, grey50, yellow500} from 'material-ui/styles/colors'

const cardStyle = {
  marginTop: 5,
  display: 'block',
  width: '30vw',
  height: '45vh',
  backgroundColor: yellow500
}
const cardHeaderStyle = {
  float: 'left',
  marginRight: '1vw',
  fontSize: '63px'
}
const subtitleStyle = {
  fontSize: '10px'
}
const style = {
  fontSize: '5px'
}
class HeroeCard extends Component {

  render() {
    return (
      <Card style={cardStyle} >
        <div >
          <div id="container">
            <div style={cardHeaderStyle}>
              <Avatar src="../public/Marvel_logo.png" size={130}/>
            </div>
            <div>
              <CardHeader
                title="SUPER HERO"
                subtitle= "Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                 aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                 ullamco laboris nisi ut aliquip."
                subtitleStyle={subtitleStyle}/>
            </div>
          </div>
          <RaisedButton
            label="View more"
            backgroundColor={red500}
            labelColor={grey50}
            style= { style} />
        </div>
      </Card>
    )
  }
}

export default HeroeCard
