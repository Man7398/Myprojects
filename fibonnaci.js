function fib(n){
if(n<=1)
{
    return n;
}
return fib(n-1) + fib(n-2);
}
//console.log(fib(5));
const num = 7;

for(let i = 0; i<num;  ++i){
 console.log(fib(i))
}
