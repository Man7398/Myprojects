function fact(i){
   if(i<=1){
    return i;
} else 
  {let fact=1;
    for(let j=1;j<=i;j++)
    fact *=i;
  }
  console.log('the factorial is');
}
