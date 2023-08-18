var myvar;
function mainfun()
{
    myvar=setTimeout("test()",2000);
}
function test()
{
    document.getElementById('mainfunction').style="display:block";
    document.getElementById('loader').style="display:none";
}

var myvar1;
function mainfun1()
{
    myvar1=setTimeout("loading()",1000);
}
function loading()
{
    document.getElementById('mainfunction').style="display:block";
    document.getElementById('loader-page').style="display:none";
} 