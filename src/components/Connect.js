import React, { Component } from 'react' 
import { Redirect } from 'react-router-dom'

export default class Connect extends Component {

    state = {
        pseudo: '',
        goToChat: false
    }

    handleChange = event => {
        const pseudo = event.target.value
        this.setState({ pseudo })
    }

    handleSubmit = event =>{
        event.preventDefault()
        this.setState({ goToChat: true })
    }

  render() {
    if (this.state.goToChat) {
        return <Redirect push to={`/pseudo/${this.state.pseudo}`}/>
    }
    return (
      <div className="connectionBox">
      <form className="connection" onSubmit={ this.handleSubmit }> 
        <input value={this.state.pseudo} onChange={this.handleChange} placeholder="Pseudo" type="text" required/>
        <button type="submit">GO!</button>
      </form>
      </div>
    )
  }
}