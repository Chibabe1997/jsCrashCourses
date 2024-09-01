var output = [];
var count = 1;

function fizzBuzz(){
    while (count <= 100){
    if (count % 3 === 0 && count % 5 === 0){
        output.push("fizzbuzz");
    } else if (count % 5 === 0){
        output.push("buzz");
    } else if (count % 3 === 0){
        output.push("fizz");
    } else{
        output.push(count);
    }
    count++;
    }
    console.log(output);
}


var i = 1;
while (i < 2){
    console.log(i);
    i++;
}