function calcTemp()
{
    tval=document.getElementById("temp").value;
    ttype=document.getElementById("temp_diff").value;
    console.log(tval);
    console.log(ttype);
    if(ttype=="cel")
    {
        tval=1.8*tval+32;
        tval=tval.toFixed(4);
        document.getElementById("result").innerText=`=${tval} Fahrenheit`;
    }
    else
    {
        tval=(tval-32)/1.8;
        tval=tval.toFixed(4);
        document.getElementById("result").innerText=`=${tval} celcius`;
    }
    
}