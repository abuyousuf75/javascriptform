

function validation(){

    var user =document.getElementById('user').value;
    var password=document.getElementById('password').value;
    var ConformPass = document.getElementById('ConformPass').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('number').value;

    /* ---=== For Chack User Name */


    if(user ==""){

        document.getElementById('userName').innerHTML="** Pleas Input The User Name";

        return false;
    }

    if((user.length<=2) || (user.length>20)) {
        document.getElementById('userName').innerHTML="** User Name Not Vallid User Name Must Between 3 to 20 latter";

        return false;
    }


    if(!isNaN (user)){
        document.getElementById('userName').innerHTML="** This Fild Only Allow Latter";

        return false;
    }

    /*---==== For Check Password====--*/


    if(password ==""){

        document.getElementById('userpass').innerHTML="** Pleas Input The User PassWord";

        return false;
    }


    if(password.length<=4) {
        document.getElementById('userpass').innerHTML="** Too Small PassWord";

        return false;
    }





    if(ConformPass ==""){

        document.getElementById('Cpass').innerHTML="** Pleas Conform Password";

        return false;

    }


    if(password!==ConformPass){

        document.getElementById('Cpass').innerHTML="** Password Not Matched! Try Again";

        return false;
    }





    /*=== For Mobile Number Check ===*/



    if(number==""){
        document.getElementById('userNumber').innerHTML="** Please Input Your Number"
    }

 

    if(number.length!=11){
        
        document.getElementById('userNumber').innerHTML="** Please Input Number Between 11 Degits"

    }

    if(isNaN(number)){

        document.getElementById('userNumber').innerHTML="** Here Support Only Number"

    }



     /*--===== Email---=====*/



     if(email ==""){

        document.getElementById('userEmail').innerHTML="** Pleas Input Your Email";

        return false;

    }


    if(email.indexOf("@")<=0){
        document.getElementById('userEmail').innerHTML="** @ Invalid Possition";

        return false;

    }

    if(email.charAt(email.length-4)!="."){
        document.getElementById('userEmail').innerHTML="** Invalid Email";

        return false;
    }


}