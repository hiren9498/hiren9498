// for clear creat a finction
function clr()
{
    document.getElementById('result').value=""; 
}
// display input value in result
function display(val)
{
    document.getElementById('result').value+=val;
}
// backpress and slice  each element
function bck()
{
    var clk=document.getElementById('result').value;
    var clk1=clk.slice(0,-1);
    document.getElementById('result').value=+clk1;
} 
// creat a function by final result

function finalresult()
{
    var x=document.getElementById('result').value;
    var z=eval(x);
    document.getElementById('result').value=z;
}
// function for pow

function sq()
{
    var x=document.getElementById('result').value;
    var y=Math.pow(x,2);
    document.getElementById('result').value=y;
}