function eventAdder(){
    var newEvent = document.forms["entry"]["eve"].value;
    var newDay = document.forms["entry"]["day"].value;

    if(newEvent==""){
        alert("No Event entered");
        return false;
    } else if(newDay ==""){
        alert("Please enter day");
        return false;

    } else{
        if((newDay=="monday")||(newDay=="Monday")){
            var dayTable = document.getElementById("mon");
            (dayTable.insertRow(dayTable.rows.length)).innerHTML = newEvent;
        }else if((newDay=="tuesday")||(newDay=="Tuesday")){
            var dayTable = document.getElementById("tue");
            (dayTable.insertRow(dayTable.rows.length)).innerHTML = newEvent;
        }else if((newDay=="wednesday")||(newDay=="Wednesday")){
            var dayTable = document.getElementById("wed");
            (dayTable.insertRow(dayTable.rows.length)).innerHTML = newEvent;
        
        }else if((newDay=="thursday")||(newDay=="Thursday")){
            var dayTable = document.getElementById("thr");
            (dayTable.insertRow(dayTable.rows.length)).innerHTML = newEvent;
        }else if((newDay=="friday")||(newDay=="Friday")){
            var dayTable = document.getElementById("fri");
            (dayTable.insertRow(dayTable.rows.length)).innerHTML = newEvent;
        }
        document.forms["entry"]["eve"].value = "";
        document.forms["entry"]["day"].value ="";
        return true;


    }

}
function clearMonday(){
    var dayTable = document.getElementById("mon");
    dayTable.innerHTML=" ";
    
}
function clearTuesday(){
    var dayTable = document.getElementById("tue");
    dayTable.innerHTML=" ";
    
}
function clearWednesday(){
    var dayTable = document.getElementById("wed");
    dayTable.innerHTML=" ";
    
}
function clearThursday(){
    var dayTable = document.getElementById("thur");
    dayTable.innerHTML=" ";
    
}
function clearFriday(){
    var dayTable = document.getElementById("fri");
    dayTable.innerHTML=" ";
    
}