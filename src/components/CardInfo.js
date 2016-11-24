import React, { Component } from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import {red500, grey50, yellow500} from 'material-ui/styles/colors'
import RelatedComics from './RelatedComics'
import DialogComponent from './DialogComponent'


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
  constructor(props) {
    super(props)
    this.state = {
      visibleDialog: false,
    }
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleOpen() {
    this.setState({visibleDialog: true})
  }

  handleClose() {
    this.setState({visibleDialog: false})
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.visibleDialog && !prevState.visibleDialog) {
      this.refs.dialogComponent.focus()
    }
  }

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
              labelColor={grey50}
              onTouchTap={this.handleOpen}
              >

              <DialogComponent ref="dialogComponent"
                open={this.state.visibleDialog}
                onHandleClose={this.handleClose}/>
            </RaisedButton>
          </div>
          <CardTitle title="Related Comics" titleStyle={styles.titleStyle}/>
          <RelatedComics comics={this.props.comics}/>
        </Card>
      </div>
    )
  }
}

export default CardInfo
