let clock=()=>{
    let date=new Date();
    let hrs=date.getHours();
    let mins=date.getMinutes();
    let sec=date.getSeconds();
    let period="AM";

    if(hrs==0){
        hrs=12;
    } else if(hrs>=12){
        period="PM"
    }
    if (sec<10){
        sec= 0+`${sec}`
    }if(hrs<10){
        hrs=0+`${hrs}`
    }
    if(mins<10){
        mins=0+`${mins}`
    }


    let time =`${hrs}:${mins}:${sec}:${period}`
    document.getElementById("clock").innerHTML=time;

    setInterval(clock,1000);
};
clock();