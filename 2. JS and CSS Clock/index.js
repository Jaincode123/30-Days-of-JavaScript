setInterval(() =>{
    changeTime();
},1000)

function changeTime(){
    dd=new Date();
    hr=(dd.getHours())%12;
    min=dd.getMinutes();
    sec=dd.getSeconds();

     hrDeg=30*hr + min*0.5;
     minDeg=6*min;
     secDeg=6*sec;

    document.getElementById("hour").style.transform=`rotate(${hrDeg}deg)`;
    document.getElementById("minute").style.transform=`rotate(${minDeg}deg)`;
    document.getElementById("second").style.transform=`rotate(${secDeg}deg)`;
}