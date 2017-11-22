import React, {Component} from 'react'

export default class CommentBox extends Component{

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
        this.setState(
            {comment: ''}
        )
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit} className="comment-box">
                    <textarea
                        onChange={this.onHandleChange}
                        value={this.state.comment}/>
                    <button action="submit">Submit Comment</button>
            </form>
        )
    }
}