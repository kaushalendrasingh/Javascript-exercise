const a=[];

a.unshift("say hello");
a.unshift('do gym in morning');
a.unshift(`wake up in morning`);

// a.forEach(function(todo,i){
//     console.log(`${todo} ${i+1}`)
// })

for(let i=0; i<= a.length-1; i++){
    console.log(`${a[i]}  ${i+1}`);
    

}