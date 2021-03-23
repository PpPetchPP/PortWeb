var timerint = 30;
var stared = false;
var timefun = null;
window.onload = pageLoad; 
function pageLoad()
{
    var x = document.getElementById("start");  
    var target = document.getElementById("target");
    x.onclick = StartGame;
}

function StartGame()
{
    if(stared == false)
    {
        stared = true;
        var n = document.getElementById("num").value;
        var c = document.getElementById("favcolor").value;
        document.getElementById("timer").innerHTML = "Timer : " + timerint;
        timefun = setInterval(CountTime,1000);
        console.log(n);
        console.log(c);
        CrereBox(n,c);
    }
}

function CountTime()
{
    timerint -= 1;
        if(timerint >= 0)
        {
            document.getElementById("timer").innerHTML = "Timer : " + timerint;
        }
        else 
        {
            clearInterval(timefun);
            Clear();
            alert("Time Out")   
        }
}

function CrereBox(value,color)
{
    var c = color;
    var name;
    if(c == "red")
    {
        name = "nutty1";
    }
    else if(c == "blue")
    {
        name = "nutty2";
    }
    else if(c == "green")
    {
        name = "nutty3";
    }
    for(var x = 0 ; x < value ; x++)
    {
        var h2 = document.createElement("div");
        h2.innerHTML= "<img src='Nutty.png' class='"+name+"'></img>";
        h2.className = "box";
        h2.id = "inbox"+x;
        document.getElementById("main").appendChild(h2);
        //document.getElementById("main").style.color = c;
        h2.style.marginLeft = Math.random()*(700-100)+"px" ;
        h2.style.marginTop = Math.random()*(700-100)+"px" ;
        whenBoxClick(h2)
    }      
}

function whenBoxClick(bigbox)
{   
    bigbox.onclick = function()
    {    
        document.getElementById(bigbox.id).remove();
        var y = document.getElementById("main").childElementCount;
        if(y == 0)
        {
            alert("Win");
            clearInterval(timefun); 
            Clear(); 
        }
    }
}

function Clear()
{
    document.getElementById("target").innerHTML = "<div id='main'></div>";
    timerint = 30;
    stared = false;
    document.getElementById("timer").innerHTML = "Timer : ";
}
