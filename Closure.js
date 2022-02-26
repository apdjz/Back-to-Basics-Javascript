 function greeting(message) {
   return function(name){
        return message + ' ' + name;
   }
}
let sayHello = greeting('Hello');
let sayGoodbye = greeting('Goodbye');

console.log(sayHello('X'));
