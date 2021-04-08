import React from 'react';
import './index.css';
class Survey extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name:"None submitted",
      email:"None submitted",
      selection: "None Selected",
      tech:'Please enter any final comments'
    };
  }

  myChangeHandler = (event) =>{
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]:val});
  }

  mySubmitHandler = (event) => {
    alert("These have been Submitted: \r\n" +
    "   Name:\t\t\t" + this.state.name + "\n" +
    "   Email:\t\t\t" + this.state.email + "\n" +
    "   Selection:\t\t\t" + this.state.selection + "\n" +
    "   Invention:\t\t\t" + this.state.invent + "\n" +
    "   Future piece of Tech:\t\t\t" + this.state.tech + "\n");
  }
  render() {
    return(
      <div class="container">
        <header class="header">

        <h1>Technologies of the Past and the Future Form</h1>

        </header>
        <form id='surveyForm' onSubmit={this.mySubmitHandler}>
          <div class='form-section'>
            <label for="firstName"> First Name:</label>
            <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="Enter your name (required)"
            onChange={this.myChangeHandler}
            />
          </div>
          <div class='form-section'>
            <label for="email"> Email:</label>
            <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter your Email(required)"
            onChange={this.myChangeHandler}
            />
          </div>
          <div class='form-section'>
            <h4>Would you rather get to talk to past reletives or future decendents?</h4>
            <select id="selection" name="selection" class = "form-control" value={this.state.selection} onchange={this.myChangeHandler}>
              <option selected value="None selected">Make Your Choice</option>
              <option value="past">Past</option>
              <option value="future">Future</option>
            </select>
          

          </div>
          <div class='form-section'>
            <p>What is the best invention created out of these four?</p>
            <input
              name='invent'
              value='wheel'
              type='radio'
              class='input-radio'
              onChange={this.myChangeHandler}
            />Wheel
            <input
              name='invent'
              value='car'
              type='radio'
              class='input-radio'
              onChange={this.myChangeHandler}
            />Car
            <input
              name='invent'
              value='bulb'
              type='radio'
              class='input-radio'
              onChange={this.myChangeHandler}
            />Light Bulb
             <input
              name='invent'
              value='computer'
              type='radio'
              class='input-radio'
              onChange={this.myChangeHandler}
            />Computer





          </div>

          <div class='form-section'>
            <h4>What technology do you want to see in the future and why?</h4>
            <textarea
            name='tech'
            class="input-textarea"
            value={this.state.tech}
            onChange={this.myChangeHandler}
            />
            

          </div>
          <div class='form-section'>
            <button type="submit" id="submit-button">
                Submit
            </button>
          </div>

          

        </form>


      </div>

      
      
    );    
  }
}
export default Survey;
