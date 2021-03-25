async function getAPI(){

    //var api string 
    var apiString = "https://baconipsum.com/api/";
    //var api type input
    var apiType = document.getElementById("select").value;
    //var # of paras input
    var inputPara = document.getElementById("para").value;
    // var of alg input
    var inputAlg = document.getElementById("alg").value;
    //if (meat and filler)
    if(apiType=='filler'){
    
        //var meat and filler
        apiString= apiString + "?type=meat-and-filler&paras=" + inputPara;
        
        var response = await fetch(apiString);
    

        // clear both <p>
        document.getElementById("raw").innerHTML = "";
        document.getElementById("formatted").innerHTML= "";
        document.getElementById("crypt").innerHTML ="";
  
        //create JSON Object
        var jsonData = await response.json();
        
        // fill 1st <p> with raw data
        document.getElementById("raw").innerHTML = JSON.stringify(jsonData);
        // fill 2nd <p> with formatted data
        for(var i in jsonData){
            document.getElementById("formatted").innerHTML += "<p>" + jsonData[i] + "<p>";
        }

        if(inputAlg == 'algOne'){
            //var for blank JSON file
            var newJSON = [];
            var newPar = '';


            //for loop that runs through json file

                for (var j in jsonData){ 
                    //for each char in j 
                    for (chara in jsonData[j]){
                        //grabs unicode character in unicode value
                        var newChar = jsonData[j][chara];
                        //alert(newChar);
                        newCharCode = newChar.charCodeAt(0);
                        //filter to which chars get changed
                        if ((newCharCode >= 65)&&(newCharCode <= 77)){        
                            newChar = String.fromCharCode(newCharCode+1);
                            //fill empty JSONObject
                            //alert(newChar);

                    
                        }//end of if
                        newPar += newChar;
                        
                    } //end for chara
                    
                    newJSON.push(newPar);
                }//end for j   
                for(var i in newJSON){
                    document.getElementById("crypt").innerHTML += "<p>" + newJSON[i] + "<p>";
                }        
                
        }else{//Alg 2
                        //var for blank JSON file
                        var newJSONTwo = [];
                        var newParTwo = '';
            
            
                        //for loop that runs through json file
            
                            for (var j in jsonData){ 
                                //for each char in j 
                                for (chara in jsonData[j]){
                                    //grabs unicode character in unicode value
                                    var newChar = jsonData[j][chara];
                                    //alert(newChar);
                                    newCharCode = newChar.charCodeAt(0);
                                    //filter to which chars get changed
                                    if ((newCharCode >= 65)&&(newCharCode <= 122)){        
                                        newChar = String.fromCharCode(newCharCode+5);
                                        //fill empty JSONObject
                                        //alert(newChar);
            
                                
                                    }//end of if
                                    newParTwo += newChar;
                                    
                                } //end for chara
                                
                                newJSONTwo.push(newParTwo);
                            }//end for j   
                            for(var i in newJSONTwo){
                                document.getElementById("crypt").innerHTML += "<p>" + newJSONTwo[i] + "<p>";
                            }        
                            

        }

    } else{
        apiString= apiString + "?type=all-meat&paras=" + inputPara;
        
        var response = await fetch(apiString);
    

        // clear both <p>
        document.getElementById("raw").innerHTML = "";
        document.getElementById("formatted").innerHTML= "";
        document.getElementById("crypt").innerHTML ="";
  
        //create JSON Object
        var jsonDataTwo = await response.json();
        // fill 1st <p> with raw data
        document.getElementById("raw").innerHTML = JSON.stringify(jsonDataTwo);
        // fill 2nd <p> with formatted data
        for(var i in jsonDataTwo){
            document.getElementById("formatted").innerHTML += "<p>" + jsonDataTwo[i] + "<p>";
        }
        if(inputAlg == 'algOne'){
            //var for blank JSON file
            var newJSONAll = [];
            var newParThree = '';


            //for loop that runs through json file

                for (var j in jsonDataTwo){ 
                    //for each char in j 
                    for (chara in jsonDataTwo[j]){
                        //grabs unicode character in unicode value
                        var newChar = jsonDataTwo[j][chara];
                        
                        newCharCode = newChar.charCodeAt(0);
                        //filter to which chars get changed
                        if ((newCharCode >= 65)&&(newCharCode <= 77)){        
                            newCharThree = String.fromCharCode(newCharCode+1);
                            
                            

                    
                        }//end of if
                        newParThree += newChar;
                        
                    } //end for chara
                    
                    newJSONAll.push(newParThree);
                }//end for j   
                for(var i in newJSONAll){
                    document.getElementById("crypt").innerHTML += "<p>" + newJSONAll[i] + "<p>";
                }        
                
        }else{//Alg 2
            //var for blank JSON file
            var newJSONTwo = [];
            var newParTwo = '';


            //for loop that runs through json file

                for (var j in jsonDataTwo){ 
                    //for each char in j 
                    for (chara in jsonDataTwo[j]){
                        //grabs unicode character in unicode value
                        var newChar = jsonDataTwo[j][chara];
                        //alert(newChar);
                        newCharCode = newChar.charCodeAt(0);
                        //filter to which chars get changed
                        if ((newCharCode >= 65)&&(newCharCode <= 122)){        
                            newChar = String.fromCharCode(newCharCode+5);
                            //fill empty JSONObject
                            //alert(newChar);

                    
                        }//end of if
                        newParTwo += newChar;
                        
                    } //end for chara
                    
                    newJSONTwo.push(newParTwo);
                }//end for j   
                for(var i in newJSONTwo){
                    document.getElementById("crypt").innerHTML += "<p>" + newJSONTwo[i] + "<p>";
                } 
            
                

        }
        
        








    }

    return true;

    //else 
        //var all meat


}