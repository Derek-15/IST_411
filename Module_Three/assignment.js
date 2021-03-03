function listAdd(){
    //variables for the word and number in form
    var tableNewWord = document.forms["entry"]["entryWord"].value;
    var tableNewNumber = document.forms["entry"]["entryNumber"].value;


   //if statement to check if a word is entered and if a 1 or 2 is entered
    if(tableNewWord == ""){
        alert("please enter a word to check");
        return false;
    } else if((tableNewNumber != 1) && (tableNewNumber != 2)){
        alert("please enter number 1 or 2");
        document.forms["entry"]["entryNumber"].value= "";
        return false;
    }






    

         //Checks one is entered if not a two was entered
        if(tableNewNumber==1){
            
            


            var tableWordLength = document.forms["entry"]["entryWord"].value.length;
            var palindrome = true;

            //checks for algorithm
            for (var i = 0; i < tableWordLength/2; i++) {
                if (tableNewWord[i] != tableNewWord[tableWordLength - 1 - i]) {
                    palindrome = false;
                }
            }
            alert(palindrome);

            var pal = " : yes";
            if(!palindrome){
                pal = " : no";
            }
            //Inserts into list

            var wordTable = document.getElementById("ListOne");
            (wordTable.insertRow(wordTable.rows.length)).innerHTML = tableNewWord + pal;


        } else{
            var wordTableTwo = document.forms["entry"]["entryWord"].value;
            //reversed word
            var oppisite = wordTableTwo.split("").reverse().join("");
            var palid = true;
            //Checks if reverse is the same
            if(oppisite != wordTableTwo){
                palid = false;
            }
            alert(palid);
            var palTwo = " : yes";
            if(!palid){
                palTwo = " : no"
            }

            //Inserts into second list
            var wordTable = document.getElementById("ListTwo");
           (wordTable.insertRow(wordTable.rows.length)).innerHTML = tableNewWord + palTwo;             
        }
         document.forms["entry"]["entryWord"].value = "";
         document.forms["entry"]["entryNumber"].value = "";
         return true;


     

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