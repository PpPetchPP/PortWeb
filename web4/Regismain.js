window.onload = Whenloaded;
function Whenloaded()
{
    var Myform = document.getElementById("Regis");
    Myform.onsubmit = WhenSummit;
}

function WhenSummit()
{
    var pass = document.forms['Regis']['PASSWORD'].value;
    var repass = document.forms['Regis']['RePASSWORD'].value;
    if(pass == repass)
    {
        
    }
    else 
    {
        alert("Your Password not match")
        return false;
    }
}