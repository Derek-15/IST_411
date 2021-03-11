async function getData(){
      // Declare API var
      var apiString = "https://baconipsum.com/api/";
      // Declare Dropdown list value
      var inputValue = document.getElementById("para").value;
      apiString= apiString + "?type=meat-and-filler&paras=" + inputValue;
      alert(apiString);
      //API fetch
      var response = await fetch(apiString);
    

      // clear both <p>
      document.getElementById("rawData").innerHTML = "";
      document.getElementById("formattedData").innerHTML= "";

      //create JSON Object
      var jsonData = await response.json();
      // fill 1st <p> with raw data
      document.getElementById("rawData").innerHTML = JSON.stringify(jsonData);
      // fill 2nd <p> with formatted data
      for(var i in jsonData){
          document.getElementById("formattedData").innerHTML += "<p>" + jsonData[i] + "<p>";
      }
      //for loop runs through JSON object and adds paragraphs 
      return true;



}