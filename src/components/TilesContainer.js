import React, { Component } from 'react';
import Tile from './Tile'
import UUID from 'uuid'

export default class TilesContainer extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        status: ""
      }
    }

    sortingCB = {   
        'name': (a,b)=>{
        let nameA = a.name.toUpperCase();
        let nameB = b.name.toUpperCase();
        return nameA < nameB ? -1 : 1
        },
        'weight': (a,b)=>{
        return a["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"] - b["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]
        }
    }
    
    render(){
        const hogCopy = Array.from(this.props.hogs)
        hogCopy.sort(this.sortingCB[this.props.selectBy])
        return(
            <div className="ui grid container center aligned">
                {hogCopy.map((hog, key) => {
                    if (hog.greased.toString() === this.props.greased) {
                        return <Tile hog={hog} key={UUID()}/>
                    } else {
                    return console.log("No matches")
                    }
                })}
            </div>
        )
    }
}