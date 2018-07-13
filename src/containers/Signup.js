import React, { Component } from 'react'
import { connect } from 'react-redux'

class Signup extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
        <div>
            <h1>THE IDDOG</h1>
            <input onKeyDown={ this.props.inputChanged } type="text" placeholder="your email" value={ this.props.inputValue }/>
        </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        inputValue: state.inputValue
    }
}

function mapDispatchToProps(dispatch){
    return {
        inputChanged: () => {
            const action = { type: 'ADD' }
            
            (action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);