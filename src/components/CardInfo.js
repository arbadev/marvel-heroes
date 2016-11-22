import React, { Component } from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import {red500, grey50, yellow500} from 'material-ui/styles/colors'

const styles = {
  cardStyle : {
    display: 'block',
    width: '30vw',
    height: '45vh',
    backgroundColor: grey50,
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
    position: 'absolute',
    paddingBottom: '200px'
  }
}

class CardInfo extends Component {
  render() {
    return (
      <div>
        <Card style={styles.cardStyle}>
          <div>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            </CardText>
            <RaisedButton label="View more"
              backgroundColor={red500}
              labelColor={grey50}
              style={styles.raisedButtonStyles}/>
          </div>
          <CardTitle title="Related Comics"/>
          <div style={styles.wrapperStyle}>
            <div style={styles.blockStyle}>Comic #1</div>
            <div style={styles.blockStyle}>Comic #2</div>
            <div style={styles.blockStyle}>Comic #3</div>
            <div style={styles.blockStyle}>Comic #4</div>
          </div>
        </Card>
      </div>
    )
  }
}

export default CardInfo
