function val()
{
    if(document.frm.fname.value=="")
   { 
    alert('please enter your first name *')
    document.frm.fname.focus();
    return false;
   }

   if(document.frm.lname.value=="")
   {
    alert('please enter your lastname *')
   document.frm.lname.focus();
return false;
}

if(document.fmn.email.value=="")
{
alert('please enter your email *')
document.frm.focus();
return false;
}
}