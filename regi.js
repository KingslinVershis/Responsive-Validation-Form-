const form=document.getElementById("form");
const uname=document.getElementById("name");
const mail=document.getElementById("mail");
const password=document.getElementById("password");
const password2=document.getElementById("password2");
const btn=document.getElementsByClassName("sub");

String.prototype.isEmail = function() {
    return !!this.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
}

function checklength(input, min, max) {
    const data = input.value.trim().length;
    if(input.value === ""){
       error(input, `${getname(input)} is Required`);
    }
    else if(data < min){
        error(input, `${getname(input)} Must Greater Than ${min} Character`);
    }
    else if(data>max){
        error(input, `${getname(input)} Must Smaller Than ${max} Character`);
    }
    else {
        success(input);
        return true;
    }
    return false;
}
function checkmail(input) {
    if(input.value === "")
{
    error(input, `${getname(input)} is Required`);
    return false;
}
else if (!input.value.trim().isEmail())
{
    error(input, `Please Enter a valid email ID`);
    return false;
}
return true;
}
function checkpassword2(password,password2) {
    if(password.value != password2.value){
        error(password2, `${getname(password2)} Does Not Match`);
        return false;
    }
    return true;
}
function getname(input){
    return input.getAttribute("data-name");
}
function error(input, message){ 
    const fmgroup = input.parentElement;
    fmgroup.className="fgroup error";
    const p = fmgroup.querySelector("p");
    p.innerHTML = message;
} 
function success(input){
    const fmgroup=input.parentElement;
    fmgroup.className="fgroup success";
    const p=fmgroup.querySelector("p");
    p.innerHTML = "";
}

function required(inputs) {
    inputs.forEach((input) => {
        if (input.value.trim() === "") {
              error(input, `${getname(input)} is Required`);
              return false;
        }
        else{
            success(input);
            return true;
        }
    });
}
var main=form.addEventListener("submit",function (e){
    e.preventDefault();
    const one=required([uname, mail, password, password2]);
    const two=checklength(uname, 3, 15);
    const three=checklength(password, 5, 10);
    const four=checkmail(mail);
    const five=checkpassword2(password,password2);
    console.log(two,three,four,five);
    if(two && three && four && five){
        window.alert("Your Account Was Signup Successfully!!!");
        window.location.href="login.html";
    }
    return false;
});
