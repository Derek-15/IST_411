export {}
async function getDailyAPI(){
    //api
    let apiString = "https://www.alphavantage.co/query";
    //var input 
    let dailyValue= document.getElementById("dss").value;
    //apistring
    apiString= apiString + "?function=GLOBAL_QUOTE&symbol=" + dailyValue + "&apikey=6FBPWOF8VYCE9X3"
    
    
    //fetch api
    let response = await fetch(apiString);

    // clear <p> api
    document.getElementById("dstText").innerHTML = "";
    //create JSON object
    let jsonData = await response.json();

    let responseText = "Opening: " + (jsonData["Global Quote"]["02. open"]) + "<br>" +
    "High: " + (jsonData["Global Quote"]["03. high"]) 
    + "<br>"
    +"Low: " + (jsonData["Global Quote"]["04. low"])
    + "<br>"
    +"Volume: " + (jsonData["Global Quote"]["06. volume"]);


    //fill <p>
    document.getElementById("dstText").innerHTML = responseText;
    //document.getElementById("dssText").innerHTML = JSON.stringify(jsonData);

  

}
async function getOverViewAPI(){
    //api
    let apiString = "https://www.alphavantage.co/query";
    //var input 
    let dailyValue= document.getElementById("oss").value;
    //apistring
    apiString= apiString + "?function=OVERVIEW&symbol=" + dailyValue + "&apikey=6FBPWOF8VYCE9X3";
    let response = await fetch(apiString);

    // clear <p> api
    document.getElementById("ossText").innerHTML = "";
    //create JSON object
    let jsonData = await response.json();

    let responseText = "Name: " + (jsonData['Name']) +
    +
    "<br>" +" Stock Exchange: " + (jsonData["Exchange"])
    +
    "<br>" +"Country: " + (jsonData["Country"])
    +
    "<br>" +"Full Time Employees: " + (jsonData["FullTimeEmployees"]) ;

    //fill <p>
    document.getElementById("ossText").innerHTML = responseText;
    //document.getElementById("ossTest").innerHTML = JSON.stringify(jsonData);


    
   
    


}