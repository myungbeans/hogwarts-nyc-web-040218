import React, { Component } from 'react';

export default class Filter extends Component {
    constructor(props){
        super(props);

        this.state = {
            status: "",
            selectBy: ""
        }
    }

    handleSelect = (event) => {
        this.setState({
            selectBy: event.target.value
        }, () => this.props.liftSelectStatus(this.state.selectBy))
    }

    handleCheck = (event) => {
        const status = event.target.value
        this.setState({
            status
        }, () => this.props.liftFilterStatus(this.state.status))
    }

    render(){
        return(
            <div className="filters">
                <div className="name-filter">
                    <form>
                        <label> Select By
                            <select onChange={this.handleSelect}>
                                <option selected disabled>Choose here</option>
                                <option value="name">Name</option>
                                <option value="weight">Weight</option>
                            </select>
                        </label>
                    </form>
                </div> <br/>
                <div className="grease-filter">
                    <form>
                    <span>Hog Status:</span><br/>
                        <label>
                            Greased
                            <input type="radio" value="true" checked={this.state.status === "true"} onChange={this.handleCheck}/>
                        </label>
                            <br/>
                        <label>
                            Ungreased
                        <input type="radio" value="false" checked={this.state.status === "false"} onChange={this.handleCheck}/>
                        </label>
                    </form>
                </div>
            </div>
        )
    }
}