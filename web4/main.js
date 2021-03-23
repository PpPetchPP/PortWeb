window.onload = getValue;
function getValue()
{
    var Myform = document.getElementById("Login");
    Myform.onsubmit = WhenSummit;
}

function WhenSummit()
{
    const urlGet = new URLSearchParams(window.location.search);
    const idGet = urlGet.get('ID');
    console.log(idGet);
    const passGet = urlGet.get('PASSWORD');
    console.log(passGet);

    var id = document.forms['Login']['idLogin'].value;
    var pass = document.forms['Login']['passLogin'].value;
    console.log(id);
    if((id == idGet) && (pass == passGet))
    {
        window.location.replace("https://youtu.be/O_IYLqIjtMg?t=17");
    }
    else
    {
        alert("Your ID or Password is incorrect");
        return false;
    } 
}