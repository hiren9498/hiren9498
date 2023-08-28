function totalsubcart()
{
    var p=parseInt(document.getElementById("price").value);
    var q=parseInt(document.getElementById("qty").value);
    var t=p*q;
    //alert('t'); 
    document.getElementById("total").innerHTML=t;
}
function chk()
{
    var fnm=document.getElementById("fname");
    // alert("fnm");
    fnm.value=fnm.value.toUpperCase();

    var lnm=document.getElementById("lname");
    // alert("lnm");
    lnm.value=lnm.value.toUpperCase();

    var enm=document.getElementById("email");
    // alert("enm");
    enmnm.value=enm.value.toUpperCase();
}
// remove cart apply remove method in jquery

$(document).ready(function(){
    $("#btn").click(function(){
        $(".section").remove();
    });
})