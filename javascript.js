var d= new Date();
var day= d.getDay();
var date= d.getDate();
var month= d.getMonth();
month=+month;
month=month+1;
var year= d.getFullYear();
// CONVERTING DAY FROM NUMBER TO STRING

if(day==1)
    day="Monday";
else if(day==2)
    day="Tuesday";
else if(day==3)
    day="Wednesday";
else if(day==4)
    day="Thursday";
else if(day==5)
    day="Friday";
else if(day==6)
    day="Saturday";
else if(day==7)
    day="Sunday";

document.querySelector(".day").innerHTML=day;
document.querySelector(".date").innerHTML=date+"/"+ month +"/"+year;

var task;
var taskElem=document.querySelector(".new-task");
var taskAdd=document.querySelector(".tasks");
var taskNo=document.querySelector(".taskno");
var count=0;

function getTask(){
    task=taskElem.value;
    taskElem.value="";
    
    if (task=="")
        alert("Enter valid task to do");
    else{
    taskAdd.innerHTML+="<p class='task'><i class='fas check fa-check-circle' onclick='done(this)'></i><span>"+task+"</span><i class='fas delete fa-calendar-times' onclick='dlt(this)'></i></p>";
    taskNo.innerHTML=count;
    count++;
    }
}

function done(check){
    check.nextSibling.style.textDecoration="line-through";
    count--;
    if(count<0)
        count=0;
    taskNo.innerHTML=count;
}

function dlt(delete1){
    delete1.parentNode.style.display="none";
    count--;
    if(count<0)
        count=0;
    taskNo.innerHTML=count;
}