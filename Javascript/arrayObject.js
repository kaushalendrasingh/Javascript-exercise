const newTodo = [{
    title: 'Buy Bread',
    status: false,
},{
    title: 'go to gym',
    status: false,
},{
    title:'learn coding',
    status:true,
}];

// const index = newTodo.findIndex( function(todo, yo){
//     console.log(yo);
    
//     return todo.title ==='go to gym';
// })

// console.log(index);

//method 2

let findTodos = function(myTodos, title){
    const index= myTodos.findIndex(function(todo, indexVal){
        return todo.title.toLowerCase() === title.toLowerCase();
    })
    return myTodos[index];
}

let variable = findTodos(newTodo, 'learn coding')
console.log(variable);
