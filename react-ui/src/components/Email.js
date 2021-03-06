import React from 'react';
import email from '../images/email.png';

class Email extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        message: ''
      }
    }
  
    render() {
      return(
        <div>
            <h1>Contact Form</h1>
          <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
            <div className="form-group">
              <label style={{color: 'black'}} htmlFor="name">Name</label>
              <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
            </div>
            <div className="form-group">
              <label style={{color: 'black'}} htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
            </div>
            <div className="form-group">
              <label style={{color: 'black'}} htmlFor="message">Message</label>
              <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
            </div>
            <button style={{color: '#B71FEA', padding: '0px'}} type="submit" className="btn btn-primary">
              <img src={email} alt="email"></img>
            </button>
          </form>
        </div>
      );
    }
  
    onNameChange(event) {
      this.setState({name: event.target.value})
    }
  
    onEmailChange(event) {
      this.setState({email: event.target.value})
    }
  
    onMessageChange(event) {
      this.setState({message: event.target.value})
    }
  
    resetForm(){
      this.setState({name: '', email: '', message: ''})
    }

    handleSubmit(e) {
        const PORT = process.env.PORT || 80;
        e.preventDefault();
        fetch('http://localhost:80/send', {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            })
        .then((response) => (response.json()))
        .then((response)=> {
            if (response.status === 'success') {
                alert("Message Sent."); 
                this.resetForm()
            }
            else if (response.status === 'fail') {
                alert("Message failed to send.")
            }
        })
    }
  }
  
  export default Email;