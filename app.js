hour=0;
min=0;
sec=0;
msec=0;
var  interval;


var hourheading=document.getElementById("hour");
var minheading=document.getElementById("min");
var secheading=document.getElementById("sec");
var msecheading=document.getElementById("msec");

function timer(){
    msec++
    msecheading.innerHTML=msec;
    if(msec>=100){
        sec++
        secheading.innerHTML=sec;
        msec=0;


    }
        else if(sec>=60){
            min++
            minheading.innerHTML=min;
            sec=0;




        }
        else if(min>=60){
            hour++
            hourheading.innerHTML=hour;
            min=0


        }





    }




function start(){


interval=setInterval(timer,5);


}

function pause(){
    clearInterval(interval)
}

function stop(){
    msec=00;
    sec=00;
    min=00;
    hour=00;
    msecheading.innerHTML=msec;
    secheading.innerHTML=sec;
    minheading.innerHTML=min;
    hourheading.innerHTML=hour;
    pause()



}
function seti(){
    var b=document.getElementById("dis");
    b.disabled=false;

}

function fstart(){
   var a=document.getElementById("dis");
   a.disabled=true;

    
}



    

var a=[];
a.push()














