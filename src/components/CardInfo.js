import React, { Component } from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import {red500, grey50, yellow500} from 'material-ui/styles/colors'

const styles = {
  cardStyle : {
    display: 'block',
    width: '30vw',
    height: '50vh',
  },
  wrapperStyle: {
    overflow: 'auto',
  },
  c1Style: {
    float: 'left'
  },
  c2Style: {
    float: 'right'
  },
  cardTextStyle: {
    position: 'absolute',
    paddingBottom: '200px'
  },
  raisedButtonStyles: {
  }
}

class CardInfo extends Component {
  render() {
    return (
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
        <div style = {styles.wrapperStyle}>
          <div style = {styles.c1Style}>
            AAA
          </div>
          <div style = {styles.c2Style}>
            BBB
          </div>
        </div>
      </Card>
    )
  }
}

export default CardInfo
