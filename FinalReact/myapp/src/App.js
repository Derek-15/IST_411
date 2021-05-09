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
  mySubmitHandlerTwo = async (event) => {
    event.preventDefault();
 
     var apiString = "https://www.alphavantage.co/query";
     //var input 
     var dailyValue= document.getElementById("oss").value;
     //apistring
     apiString= apiString + "?function=OVERVIEW&symbol=" + dailyValue + "&apikey=6FBPWOF8VYCE9X3";
     
     
     //fetch api
     var response = await fetch(apiString);
 
     // clear <p> api
     
 
     //create JSON object
     var jsonData = await response.json();
     var responseText = "Name: " + (jsonData['Name']) +
     +
     "<br>" +" Stock Exchange: " + (jsonData["Exchange"])
     +
     "<br>" +"Country: " + (jsonData["Country"])
     +
     "<br>" +"Full Time Employees: " + (jsonData["FullTimeEmployees"]);
     alert(responseText);

 
 
     //fill <p>
     document.getElementById("ossText").innerHTML = responseText;
     //document.getElementById("dssText").innerHTML = JSON.stringify(jsonData);
 
 
   }
  render() {
    return(

      <div class="container">
         <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous"></link>
        


        <header class="header">
          <div class="navbar navbar-dark bg-dark shadow-sm"> 
            <div class="container">
              <a href="#" class="navbar-brand d-flex align-items-center">

                <strong>Stock Search</strong>
              </a>

              
            </div>
            

          
          </div>


          

       

        </header>
        <main>
          <section class="py-5 text-center container">
            <div class="row py-lg-5">
              <div class="col-lg-6 col-md-8 mx-auto">
                <h1 class="fw-light">Stock Search</h1>
                <p class="lead text-muted">Find a Stock and its information by inputing stock symbol!</p>

              </div>
            </div>
          </section>

          <div class="album py-5 bg-light">
            <div class="container">
              <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-2">
                <div class="col">
                  <div class="card shadow-sm">
                  <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Daily Stock</text></svg>
                    <div class="card-body">
                      <div class="d-flex justify-content-between align-items-center">


                        <form id='surveyForm' onSubmit={this.mySubmitHandler}>

                         <p class = 'card-text'>
                            <label for="daily"> Daily Stock Symbol</label>
                            <input
                            type="text"
                            name="daily"
                            id="daily"
                            placeholder="Enter Stock Symbol (required)"
                  
                            />
                          
                          
                            <div class='form-section'>
                              <button type="submit" id="submit-button">
                                  Submit
                              </button>
                            </div>
                            <div>
                              <p class = 'card-text' id = "dssText"></p>
                            </div>
                          </p>

                        </form>
                        </div>
                      </div>
                      
                    </div>
                </div>
                <div class="col">
                  <div class="card shadow-sm">
                  <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em"> Overview</text></svg>
                    <div class="card-body">
                      <div class="d-flex justify-content-between align-items-center">


                        <form id='surveyForm' onSubmit={this.mySubmitHandlerTwo}>

                         <p class = 'card-text'>
                            <label for="oss"> Daily Stock Symbol</label>
                            <input
                            type="text"
                            name="oss"
                            id="oss"
                            placeholder="Enter Stock Symbol (required)"

                            />
                          
                          
                            <div class='form-section'>
                              <button type="submit" id="submit-button">
                                  Submit
                              </button>
                            </div>
                            <div>
                              <p class = 'card-text' id = "ossText"></p>
                            </div>
                          </p>

                        </form>
                        </div>
                      </div>
                      
                    </div>
                </div>

              </div>
            </div>
          </div>
        </main>

      </div>


      
      
    );    
  }
}
export default Survey;

