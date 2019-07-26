function rest(...val){

    return val.reduce(function(prev,curr,index,array){
        total= prev + curr ;

        if(index === array.length -1){

            
          return total/(array.length);
           
        }
         else {
             return total;             
         }        
    })
}
//console.log(rest(4,5,6));





function spread(num1, num2){
    return num1 + num2;
}
array = [5,6];
console.log(spread(...array));

