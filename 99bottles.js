function singBottlesOfBeer (){
    var bottlesOfBeer = 99;
while (bottlesOfBeer >= 0){
    if (bottlesOfBeer > 1) {
        console.log(bottlesOfBeer + " bottles of beer on the wall " + bottlesOfBeer + " bottles of beer on the wall");
        console.log("Take one down, pass it around, bottles of beer on the wall");
    } else if (bottlesOfBeer === 1) {
        console.log(bottlesOfBeer + " bottle of beer on the wall" + bottlesOfBeer + " bottle of beer on the wall");
        console.log("Take one down, pass it around, no more bottles of beer on the wall");
    } else {
        console.log("No more bottles of beer on the wall, No more bottles of beer on the wall");
        console.log("Go to the store and buy some more, 99 bottles of beer on the wall");
    }
    bottlesOfBeer--;
}
}