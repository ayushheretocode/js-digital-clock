let clock=document.querySelector("#clock")


//the date generation and rendering function is being called after every 1000 milliseconds
setInterval(function(){
    
    let myDate=new Date()
    
    let time=myDate.toLocaleTimeString()
    
    clock.innerText=time
},1000)

