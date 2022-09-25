
function validateEmail(str){
let pattern = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+\.[A-Za-z0-9]+$/;
let pattern1 = /^[A-Za-z0-9]+[A-Za-z0-9]*@(gmail\.com|yahoo\.com|hotmail\.com)$/;
if(pattern1.test(str)){
    console.log("Email hợp lệ");
}
else{
    prompt("Nhập Email có định dạng sau: a@gmail.com|ab@yahoo.com|abc@hotmail.com");
}
}
