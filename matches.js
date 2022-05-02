 var schedule=JSON.parse(localStorage.getItem("schedule"));
display(schedule);
var favourites=JSON.parse(localStorage.getItem("favourites"))||[]
function display(data){
    data.forEach(function(element,index){
        var tr =document.createElement("tr")
        var td1=document.createElement("td")
        td1.innerHTML=element.macthNo;
        var td2=document.createElement("td")
        td2.innerHTML=element.teamA;
        var td3=document.createElement("td")
        td3.innerHTML=element.teamB;
        var td4=document.createElement("td")
        td4.innerHTML=element.Date;
        var td5=document.createElement("td")
        td5.innerText=element.venue;
        var td6=document.createElement("td")
        td6.innerText="Add as Favourites"
        td6.style.color="green"
        td6.addEventListener("click",function(){
            favouritesEle(element,index)
        })
        tr.append(td1,td2,td3,td4,td5,td6)
        document.querySelector("tbody").append(tr)
        

    })
    function favouritesEle(element){
       console.log(element)
       favourites.push(element)
       localStorage.setItem("favourites",JSON.stringify(favourites))
       
    }
}