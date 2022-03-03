function validateRegistration(){
    var regForm=document.reg;
    var firstname=regForm.fn;
    var lastname=regForm.ln;
    var pass=regForm.pw;
    var confirmPass=regForm.cpw;
    var gender=regForm.gen;
    var technology=regForm.tech;

    if(firstname.value.length<3){
        alert('first name must be morethan 3 characters');
        return false;
    }
    if(lastname.value.length<1){
        alert('last name must be atleast 1 characters');
        return false;
    }
    if(pass.value.length<3){
        alert('password must be morethan 3 characters');
        return false;
    }
    if(pass.value!=confirmPass.value){
        alert('password & confirm password must be same');
        return false;
    }
    if(gender.value.length<1){
        alert('gender should be selected');
        return false;
    }
    var flag=false;
    for(var i=0;i<technology.length;i++){
        if (technology[i].checked){
            flag.true;
        }
    }
    if(flag==false){
        alert('atleast one skill must be selected');
        return false;
    }
    return true;
}