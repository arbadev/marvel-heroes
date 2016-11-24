import React, { Component } from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import {red500, grey50, yellow500} from 'material-ui/styles/colors'
import RelatedComics from './RelatedComics'

const styles = {
  cardStyle : {
    display: 'block',
    width: '30vw',
    height: '40vh',
    backgroundColor: 'white',
    zDepth: 0
  },
  wrapperStyle: {
    width:'100%'
  },
  blockStyle: {
    display: 'inline-block',
    width: '40%',
    backgroundColor:yellow500,
    margin:'0 auto',
    marginLeft: '5%',
    fontSize:'80%'
  },
  cardTextStyle: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: '2',
    marginBottom: '5%'
  },
  titleStyle: {
    fontSize:'100%'
  }
}

class CardInfo extends Component {
  render() {
    return (
      <div>
        <Card style={styles.cardStyle} zDepth={0}>
          <div>
            <CardText style={styles.cardTextStyle}>
              {this.props.description}
            </CardText>
            <RaisedButton label="View more"
              backgroundColor={red500}
              labelColor={grey50}/>
          </div>
          <CardTitle title="Related Comics" titleStyle={styles.titleStyle}/>
          <RelatedComics comics={this.props.comics}/>
        </Card>
      </div>
    )
  }
}

export default CardInfo
