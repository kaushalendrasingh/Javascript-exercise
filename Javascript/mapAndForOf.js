 var john = {
     name: ' hey i am john',
     age: 25,
     isActive: true,
 }

 var marry = {
     name:'hey i am marry',
     age: 21,
     isActive: false,
 }

 var doe = {
     name: 'hey i am doe',
     age: 27,
     isActive: true,
 }

let user = new Map();

user.set('marry', marry)
user.set('john', john)
user.set('doe', doe)

//console.log(user);
// console.log(user.get('john'));

// console.log(user.keys());
// console.log(user.values());


// for (const key of user.keys()) {
//     console.log(key);
// }

for (const [key, value] of user.entries() ){
    console.log(' here is the key ' + key + ' and this is value " ' + value.name + ' " ');
    
    
}
