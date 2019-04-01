import React, { Component } from 'react'

export default class Form extends Component {


    state = {
        message: '',
        length: this.props.length
    }

    createMessage = () => {
        const { addMessage, pseudo, length } = this.props

        const message = {
            pseudo,
            message: this.state.message
        }

        addMessage(message)

        this.setState({ message: '', length })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.createMessage()
    }

    handleKeyUp = event => {
        if (event.key === 'Enter') {
            this.createMessage()
        }
    }

    handleChange = event => {
        const message = event.target.value
        console.log(this.props.length)
        const length = this.props.length - message.length
        console.log(message.length )
        this.setState({ message, length })
    }

  render() {
    return (
      <form className='form' onSubmit={ this.handleSubmit}>
          <textarea value={this.state.message} required maxLength={this.props.length} onChange={this.handleChange} onKeyUp={this.handleKeyUp}/>
              <div className="info">
                { this.state.length }
              </div>
              <button type="submit">
                Envoyer !
              </button>
      </form>
    )
  }
}
