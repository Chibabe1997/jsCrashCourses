function whoIsPaying(names){
    var numberOfPerson = names.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPerson);
    var randomPerson = names[randomPersonPosition];
    return randomPerson + " is buying us lunch";
}
var names = ["chidinma", "Jude","Goodness", "Timothy", "Abraham", "Funke"];
var result = whoIsPaying(names);
console.log(result);