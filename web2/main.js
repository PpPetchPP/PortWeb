function Post()
{
    var input = document.getElementById("InputUser").value;
    var topic = document.getElementById("Topic");
    var Comment1 = document.getElementById("Comment1");
    var Comment2 = document.getElementById("Comment2");


    console.log(input);
    if(topic.innerHTML == "" && input != "")
    {
        topic.innerHTML = "Topic : "+input;
    }
    else if(Comment1.innerHTML == "" && input != "")
    {
        Comment1.innerHTML = "Coment 1 : "+input;
    }
    else if(Comment2.innerHTML == "" && input != "")
    {
        Comment2.innerHTML = "Coment 2 : "+input;
    }
    document.getElementById("InputUser").value = "";
}

function Clear()
{
    document.getElementById("InputUser").value = "";
    document.getElementById("Topic").innerHTML = "";
    document.getElementById("Comment1").innerHTML = "";
    document.getElementById("Comment2").innerHTML = "";
}