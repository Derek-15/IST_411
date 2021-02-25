 function listAdd(){
     //variables for the word and number in form
     var tableNewWord = document.forms["entry"]["entryWord"].value;
     var tableNewNumber = document.forms["entry"]["entryNumber"].value;


    //if statement to check if a word is entered and if a 1 or 2 is entered
     if(tableNewWord == ""){
         alert("please enter a word to check");
         return false;
     } else if((tableNewNumber != 1) && (tableNewNumber != 2)){
         alert("please enter number 0 or 1");
         document.forms["entry"]["entryNumber"].value= "";
         return false;
      }else{
          //Checks one is entered if not a two was entered
          if(tableNewNumber==1){
              var wordTable = document.getElementById("ListOne");
              (wordTable.insertRow(wordTable.rows.length)).innerHTML = tableNewWord;

          } else{
            var wordTable = document.getElementById("ListTwo");
            (wordTable.insertRow(wordTable.rows.length)).innerHTML = tableNewWord;             
          }
          document.forms["entry"]["entryWord"].value = "";
          document.forms["entry"]["entryNumber"].value = "";
          return true;


      }

 }
 //Function to clear the first list

function clearOne(){
    var wordTable = document.getElementById("ListOne");
    wordTable.innerHTML=" ";

}
//Function to clear the second list
function clearTwo(){
    var wordTable =document.getElementById("ListTwo");
    wordTable.innerHTML=" ";
}