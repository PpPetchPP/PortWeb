window.onload = pageloaded;
function pageloaded()
{
    var HobbyBut = document.getElementById("Hobby");
    var AttentionBut = document.getElementById("Attention");
    var SkillBut = document.getElementById("Skill");
    HobbyBut.onclick = hFun;
    AttentionBut.onclick = aFun;
    SkillBut.onclick = sFun;
}

function hFun()
{
    document.getElementById("personal").innerHTML = "<h1>Hobby : งานอดิเรก</h1><p>ส่วนใหญ่จะใช้เวลาว่างไปกับการอ่านหนังสือการ์ตูน ฟังเพลง และเล่นเกม กับเพื่อน ซึ่งส่วนใหญ่จะเป็นการเล่นเกมซะมากกว่า เกมที่เล่นส่วนใหญ่นั้นก็จะไม่ได้เฉพาะเจาะจงอะไรมาก จะออกแนวเล่นตามเพื่อนซะส่วนใหญ่ แต่ก็จะมีเกมที่เล่นเป็นหลักๆอยู่ก็คือเกม DOTA2 ที่จะจริงจังเป็นพิเศษ และก็ชอบที่จะไปหาเกมแปลกๆมาเล่น เพราะชอบที่จะเห็นเกมอื่นๆในท้องตลาดที่มีความเป็นเอกลักษณ์ และคอนเซปแปลกๆของเกมนั้นๆ เพราะว่าเราเรียนพัฒนาเกมเลยคิดว่าควรจะรู้จักเกมแนวต่างๆให้เยอะ เพือมันจะได้เป็นแนวทางของเราในอนาคต</p>"
    +"<div class='pichobby'>"
    +"<img src='dota2.png'>"
    +"<img src='CSGO-Logo.png'>"
    +"<img src='hades.png'>"
    +"</div>";
    document.getElementById("Hobby").className = "active";
    document.getElementById("Attention").className = "notactive";
    document.getElementById("Skill").className ="notactive";
}

function aFun()
{
    document.getElementById("personal").innerHTML = "<h1>Attention : ความสนใจ</h1>"
    +"<p class='textcenter'>มีความสนในในด้านการพัฒนาเกมในส่วนของ</p>"
    +"<p class='textcenter'>Game Developer ด้วยโปรแกรม Unity3D</p>"
    +"<p class='textcenter'>Game Design</p>"
    +"<div class='pichobby'>"
    +"<img src='unity.png'>";
    document.getElementById("Hobby").className = "notactive";
    document.getElementById("Attention").className = "active";
    document.getElementById("Skill").className ="notactive";
}

function sFun()
{
    document.getElementById("personal").innerHTML = "<h1>Skill : ทักษะ</h1>"
    +"<table class='textcenter'>"
    +"<tr><th><h3>Programing Skill</h3></th>"
    +"<th><h3>Software Skill</h3></th></tr>"
    +"<tr><td> C#</td>"
    +"<td>Unity3D</td></tr>"
    +"<tr><td>HTML</td>"
    +"<td>Procreate</td></tr>"
    +"<tr><td>CSS</td>"
    +"<tr><td>Javascript</td>"
    +"<td></td></tr>"
    +"</table>"
    +"<div class='pichobby'>"
    +"<img src='unity.png'>"   
    +"</div>";
    document.getElementById("Hobby").className = "notactive";
    document.getElementById("Attention").className = "notactive";
    document.getElementById("Skill").className ="active";
}

function As1()
{
    document.getElementById("work").innerHTML = '<object type="text/html" data="web3/recipe.html" style="width: ' + 60 + 'vw; height: ' + 700 + 'px;"></object>';
    //web in web ref: https://stackoverflow.com/questions/17636528/how-do-i-load-an-html-page-in-a-div-using-javascript
    document.getElementById("Assighment 1").className ="active";
    document.getElementById("Assighment 2").className = "notactive";
    document.getElementById("Assighment 3").className = "notactive";
    document.getElementById("Assighment 4").className = "notactive";
}

function As2()
{
    document.getElementById("work").innerHTML = '<object type="text/html" data="web4/Regis.html" style="width: ' + 60 + 'vw; height: ' + 700 + 'px;"></object>';
    document.getElementById("Assighment 1").className ="notactive";
    document.getElementById("Assighment 2").className = "active";
    document.getElementById("Assighment 3").className = "notactive";
    document.getElementById("Assighment 4").className = "notactive";
}

function As3()
{
    document.getElementById("work").innerHTML = '<object type="text/html" data="web2/chat.html" style="width: ' + 60 + 'vw; height: ' + 700 + 'px;"></object>';
    document.getElementById("Assighment 1").className ="notactive";
    document.getElementById("Assighment 2").className = "notactive";
    document.getElementById("Assighment 3").className = "active";
    document.getElementById("Assighment 4").className = "notactive";
}
function As4()
{
    document.getElementById("work").innerHTML = '<object type="text/html" data="web5/index.html" style="width: ' + 60 + 'vw; height: ' + 700 + 'px;"></object>';
    document.getElementById("Assighment 1").className ="notactive";
    document.getElementById("Assighment 2").className = "notactive";
    document.getElementById("Assighment 3").className = "notactive";
    document.getElementById("Assighment 4").className = "active";
}
