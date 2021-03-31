async function weatherGet(){
    //api string
    var apiString = 'https://api.weather.gov/gridpoints/'

    //dropdown value
    var inputValue = document.getElementById("place").value;

    apiString = apiString + inputValue + '/47,30/forecast';

    alert(apiString);

    var response = await fetch(apiString);
    var jsonData = await response.json();


    
    document.getElementById("indPlace").innerHTML = JSON.stringify(jsonData);





    /*if( inputValue = 'oax'){
        apiString = apiString + 'aox/41,95/forcast/hourly?units=us';
        alert(apiString);
        var response = await fetch(apiString);
    

        // clear <p>
        document.getElementById("indPlace").innerHTML = "";

  
        //create JSON Object
        var jsonData = await response.json();
        document.getElementById("indPlace").innerHTML = JSON.stringify(jsonData);



    }*/

    





    //api fetch
    

    



}