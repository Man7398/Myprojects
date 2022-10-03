function greet(i){
    if(i==10){
        return ;//Base Class it checks if input comes to this it stops
    }
       else
       { 
        console.log(i);
        i++;
        greet(i);
    }
}
greet(1);