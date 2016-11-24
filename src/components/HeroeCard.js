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
    backgroundColor: grey50,
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
  },
  titleStyle: {
    fontSize:'120%',
    width:'40%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',

  }
}

class HeroeCard extends Component {

  render() {
    return (
      <div style={styles.wrapperStyle}>

        <Card style={styles.cardStyle} zDepth={1}>
          <div style={styles.blockStyle}>
            <Avatar style={styles.cardAvatarStyle} src={`${this.props.avatar}/portrait_medium.jpg`} size={180}/>
            <CardTitle title={this.props.superHeroName} titleStyle={styles.titleStyle}/>
          </div>
        </Card>
        <CardInfo
          description={this.props.description}
          comics={this.props.comics}/>
      </div>
    )
  }
}

export default HeroeCard
