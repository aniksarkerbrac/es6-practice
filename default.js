function add(num1, num2=0){ // If add function just only pass num1 then default value of num2 will be used.
    // if(num2 == undefined){
    //     num2 = 0;
    // }
    return num1 + num2 ;
}

const total = add(15, 17);
console.log(total);