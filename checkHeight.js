function tallerThan(timHeight, chiHeight) {
    if (timHeight > chiHeight) {
        return "tim is taller than chi";
    } else if (timHeight < chiHeight){
        return "chi is taller than tim";
    } else if (timHeight === chiHeight){
        return "both tim and chi are of equal heights";
    } else {
        return "wrong entry please enter the valid height";
    }
}
const x = 10;
const y = 11;
var result = tallerThan(y,x);
console.log("response = " + result);