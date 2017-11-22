import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions'

class CommentBox extends Component{

    constructor(props){
        super(props)
        this.state = {
            comment: ''
        }
    }

    onHandleChange = (event) => {
        this.setState(
            {comment: event.target.value}
        )
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.saveComment(this.state.comment)
        this.setState(
            {comment: ''}
        )
    }

    render(){
        return (
            <form
                className="comment-box"
                onSubmit={this.handleSubmit}>
                    <h4>Add a comment</h4>
                    <textarea
                        onChange={this.onHandleChange}
                        value={this.state.comment}/><br/>
                    <button
                        action="submit">
                        Submit Comment
                    </button>
            </form>
        )
    }
}

export default connect(null, actions)(CommentBox)