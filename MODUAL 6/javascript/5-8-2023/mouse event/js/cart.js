function subcart()
{
    var p=document.getElementById("price").value;
    var q=document.getElementById("qty").value;
   
    var t=p*q;
    document.getElementById("total").innerHTML=+t;
}