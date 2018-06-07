import React, { Component } from 'react';
import { Details } from './Details.js'
import exclaim from './exclaim.mp3'
import work from './workworkwork.wav'
require.context('../hog-imgs', false, /\.jpg$/)


export default class Tile extends Component {
    state = {
      cardClicked: false,
      showObject: "block",
      isHovered: false
    }

    getImage = () => {
        const slug = this.props.hog.name.toLowerCase().split(' ').join('_')
        // .replace(/ /g,"_")
        return slug;
    }

    doubleClickedOnCard = (event) => {
        this.setState({
            showObject: "none"
        })
    }

    clickedOnCard = (event) => {
        if (event.target.className === "extra content"){
            this.setState({
                cardClicked: !this.state.cardClicked
            })
        }
    }

    handleHover = (event) => {
        event.persist()
        this.setState({isHovered: !this.state.isHovered}, () => {
            let workworkwork = new Audio(work)
            if (event.type === "mouseenter") {
                workworkwork.play()
            }})
        // let EXCLAIM = new Audio(exclaim)
        
        
    }

    render(){
        const src = require(`../hog-imgs/${this.getImage()}.jpg`)
        const gif = `https://media.giphy.com/media/F4F9JPh0ZbVok/giphy.gif`
        return(
            <div className="ui eight wide column" style={{display: this.state.showObject}}>
                <div className="ui centered card" onClick={this.clickedOnCard} onDoubleClick={this.doubleClickedOnCard}>
                    <div className="image" onMouseEnter={this.handleHover} onMouseOut={this.handleHover}>
                        <img src={this.state.isHovered ? gif : src} alt={this.props.hog.name}/>
                    </div>
                    <div className="content">
                        <p className="header">Name: {this.props.hog.name}</p>
                        <div className="meta">
                            <p className="description">Specialty: {this.props.hog.specialty}</p>
                        </div>
                    </div>
                    <div className="extra content">
                        {this.state.cardClicked ? 
                        < Details hog={this.props.hog} /> : <em><p className="extra content">Click for details</p></em>}
                    </div>
                </div>
            </div>
        )
    }
}