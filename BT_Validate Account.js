function validateAccount(str){
let regexp = /^[a-z0-9_]{6,}$/;
if(regexp.test(str)){
    console.log("Account hợp lệ");
}
else{
    prompt("Nhập Account hợp lệ");
}
}