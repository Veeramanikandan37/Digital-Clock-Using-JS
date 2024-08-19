document.addEventListener("DOMContentLoaded",function(){
    function updateclock(){
    const currentdate = new Date();
    const days =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const months=["January","February","March","April","May","June","July","August","September","October","November","December"];
    let hour =currentdate.getHours()>12?currentdate.getHours()-12:currentdate.getHours();
    let min = currentdate.getMinutes()<10?'0'+currentdate.getMinutes():currentdate.getMinutes();
    let sec = currentdate.getSeconds()<10?'0'+currentdate.getSeconds():currentdate.getSeconds();
    let period =currentdate.getHours()>=12?"PM":"AM";
    let day=days[currentdate.getDay()];
    let date =currentdate.getDate()<10?'0'+currentdate.getDate():currentdate.getDate();
    let month = months[currentdate.getMonth()];
    let year = currentdate.getFullYear(); 
    hour = hour.toString().padStart(2, '0');
    min = min.toString().padStart(2, '0');
    sec = sec.toString().padStart(2, '0');
    const day_clock =document.getElementById('day') ;
    day_clock.innerHTML=day;
    const clock_time = document.getElementById('time');
    clock_time.innerHTML=`${hour}:${min}:${sec}`;
    const clock_Month=document.getElementById('year_month');
    clock_Month.innerHTML=`${date} ${month} ${year}`;
    setTimeout(updateclock,1000);
    }
    updateclock();
});