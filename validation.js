function validateForm(){
    var r=true;
    var x=document.getElementById('fname').value;
    var z=document.getElementById('uname').value;
    var c=document.getElementById('p1').value;
    var b=document.getElementById('p2').value;
    var patten1=/^[A-Za-z]+$/;
    var patten2=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/;

    if (!(x.match(patten1))){
         document.getElementById('m1').innerHTML="* only letter allowed";
         document.getElementById('fname').style.borderColor="red";
         r=false;
        }
    else{
        document.getElementById('m1').innerHTML="";
        document.getElementById('fname').style.bordercolor="black";
    }

    if(z == "")
    {document.getElementById('m2').innerHTML="* User Name must be filled out ";
     document.getElementById('uname').style.borderColor="red";
     r=false;
    }
    else{
        document.getElementById('m2').innerHTML="";
        document.getElementById('uname').style.borderColor="black";
    }

    if(c == "")
    {document.getElementById('m3').innerHTML="* Password must be filled out ";
     r=false;
    }

else if (!(c.match(patten2))){
    document.getElementById('m3').innerHTML="* Al least one small letter and one capital letter and one digit";
    r=false;
}
else if(!((c.length>=6)&&(c.length<=10))){
            document.getElementById('m3').innerHTML = "Should be 6 - 10 length";
            r = false;
        }
        else{
            document.getElementById('m3').innerHTML="";
            document.getElementById('p1').style.bordercolor="black";
        }      

if(b != c) {
    document.getElementById('m4').innerHTML="Your pass dose not match";
    r=false;
}  
else{
    document.getElementById('m4').innerHTML="";
    document.getElementById('p2').style.bordercolor="black";
}
    return r;

}
