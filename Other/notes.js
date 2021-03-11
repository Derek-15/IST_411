function noteAdder(){
     var inputNote = document.forms["entry"]["note"].value;
     if(inputNote == ""){
         alert("please enter note");
     } else{
         document.getElementById("noteHolder").innerHTML = inputNote;
     }
    

}
function clearNote(){
    
}