import React, { Component } from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import Avatar from 'material-ui/Avatar'
import {red500, grey50, yellow500} from 'material-ui/styles/colors'
import Paper from 'material-ui/Paper'
import CardInfo from './CardInfo'

const styles = {
  cardAvatarStyle : {
    float: 'left',
    marginRight: '1vw',
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
  },
  wrapperStyle: {
    width:'100px',
    height:'100px',
    position: 'relative'
  },
  arrowStyle: {
    width:'10px',
    height:'10px',
    position:'absolute',

  },
  paperStyles: {
    height: '55vh',
    width: '2vw',
    float: 'left',
    backgroundColor: yellow500
  }
}

class HeroeCard extends Component {

  render() {
    return (
      <div style={styles.wrapperStyle}>

        <Card style={styles.cardStyle} >
          <Paper style={styles.paperStyles} zDepth={0} rounded={false}/>
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
