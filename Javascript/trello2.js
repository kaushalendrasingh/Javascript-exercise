let username = 'kaushal@gmail.com';
let password = '1234';

let usercheck = function(username){
if(username.includes('@gmail.com' )){
    return true;
}
return false;

}

let passcheck = function(pass){
    if((pass.includes(1234))){
        return true;
    }
    return false;
}
console.log(passcheck(password));
