function any(){
    let name= "Kaushal";
    let age =9;


    return { age , name,
        greet(){  return `Hello ${name}`}
    }


}

//console.log(any().greet());


//Object Destructuring

let object = {

    name : 'kaushal',
    age : 22,

};

extract([ name => 'random']);


let { name , age} = object;

console.log(name);

