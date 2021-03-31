async function getQ(){
    //var api string 
    var apiString = "https://api.quotable.io/random";

    //var quote length input
    var apiQuote = document.getElementById("quote").value;
    alert(apiString);



        apiString= apiString + "?minLength=" + String(apiQuote-25) +"&maxLength=" + String(apiQuote);
        var response = await fetch(apiString);
        alert(apiString);
        

        //create JSON Object
        var jsonData = await response.json();
        document.getElementById("auth").innerHTML = JSON.stringify(jsonData.author);
        document.getElementById("place").innerHTML = JSON.stringify(jsonData.content);


   




    return true;

}