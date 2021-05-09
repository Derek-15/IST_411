import React from 'react';
import './index.css';
class Survey extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      daily: "None submitted",
      overview:"None submitted",

    };
  }

 mySubmitHandler = async (event) => {
   event.preventDefault();

    var apiString = "https://www.alphavantage.co/query";
    //var input 
    var dailyValue= document.getElementById("daily").value;
    //apistring
    apiString= apiString + "?function=GLOBAL_QUOTE&symbol=" + dailyValue + "&apikey=6FBPWOF8VYCE9X3"
    
    
    //fetch api
    var response = await fetch(apiString);

    // clear <p> api
    

    //create JSON object
    var jsonData = await response.json();
    var responseText = "Opening: " + (jsonData["Global Quote"]["02. open"]) + "<br>" +
    "High: " + (jsonData["Global Quote"]["03. high"]) 
    + "<br>"
    +"Low: " + (jsonData["Global Quote"]["04. low"])
    + "<br>"
    +"Volume: " + (jsonData["Global Quote"]["06. volume"]);
    alert(responseText)


    //fill <p>
    document.getElementById("dssText").innerHTML = responseText;
    //document.getElementById("dssText").innerHTML = JSON.stringify(jsonData);


  }
  render() {
    return(

      <div class="container">
        <header class="header">

        <h1>Stock Search</h1>

        </header>
        <form id='surveyForm' onSubmit={this.mySubmitHandler}>
          <div class='form-section'>
            <label for="daily"> Daily Stock Symbol</label>
            <input
            type="text"
            name="daily"
            id="daily"
            placeholder="Enter Stock Symbol (required)"
            //onChange={this.myChangeHandler}
            />
          </div>
          <div class='form-section'>
            <label for="overview"> Overview on Stock</label>
            <input
            type="text"
            name="overview"
            id="overview"
            placeholder="Enter Stock Symbol(required)"
           // onChange={this.myChangeHandler}
            />
          </div>

          <div class='form-section'>
            <button type="submit" id="submit-button">
                Submit
            </button>
          </div>
          <div>
            <p id = "dssText"></p>
          </div>

          

        </form>

      </div>


      
      
    );    
  }
}
export default Survey;
