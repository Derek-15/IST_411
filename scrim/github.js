async function callGitHub(){

    var apiString = "https://api.github.com/users/";

    var username = document.getElementById("name").value;
    apiString = apiString + username + "/repos"; 


    var response = await fetch(apiString);

    document.getElementById("repoData").innerHTML = "";


    var jsonData = await response.json();
    for(var i in jsonData){

        document.getElementById("formattedRepoData" + i).innerHTML = jsonData[i].name;
        document.getElementById("format" + i).innerHTML = jsonData[i].description;
        alert(jsonData[i].name);
    }


    //document.getElementById("repoData").innerHTML = JSON.stringify(jsonData);





}