import React, { Component } from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import Avatar from 'material-ui/Avatar'
import {red500, grey50, yellow500} from 'material-ui/styles/colors'
import CardInfo from './CardInfo'

const styles = {
  cardAvatarStyle : {
    float: 'left',
    marginRight: '1vw',
    marginTop: '.5vh'
  },
  cardStyle : {
    marginTop: 5,
    width: '30vw',
    height: '5vh',
    backgroundColor: yellow500,
  },
  cardInfoStyle: {
    float:'left',
    clear: 'left'
  }
}

class HeroeCard extends Component {

  render() {
    return (
      <div>
        <Card style={styles.cardStyle} >
          <div id="container">

            <div style={styles.cardAvatarStyle}>
              <Avatar src="../public/Marvel_logo.png" size={150}/>
            </div>

            <div>
              <CardTitle
                title="SUPER HERO"/>
            </div>

          </div>
        </Card>
        <CardInfo/>
      </div>
    )
  }
}

export default HeroeCard
