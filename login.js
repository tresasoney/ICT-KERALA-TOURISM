let email=document.getElementById("email");
let error=document.getElementById("error");
// let pwd= document.getElementById("pwd");
// let errorpwd=document.getElementById("errorpwd");






function  validate() {
    // let message[];
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    // let regexp2=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;


    
if(regexp.test(email.value)){
 error.innerText="VALID"
     error.style.color="red";
    //   message.push("must contain @,number,com ");
    //    document.getElementById("erroremail")="hai"
// alert("haii");
    return true;
}
else{
     error.innerHTML="invalid";
     error.style.color="red";
    // alert("heke9");
    return false;
}
}
// function passwordChanged() {
//     var strength = document.getElementById('strength');
//     var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
//     var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
//     var enoughRegex = new RegExp("(?=.{6,}).*", "g");
//     var pwd = document.getElementById("pwd");
//     if (pwd.value.length == 0) {
//         strength.innerHTML = 'Type Password';
//     } else if (false == enoughRegex.test(pwd.value)) {
//         strength.innerHTML = 'More Characters';
//     } else if (strongRegex.test(pwd.value)) {
//         strength.innerHTML = '<span style="color:green">Strong!</span>';
//     } else if (mediumRegex.test(pwd.value)) {
//         strength.innerHTML = '<span style="color:orange">Medium!</span>';
//     } else {
//         strength.innerHTML = '<span style="color:red">Weak!</span>';
//     }
// }
