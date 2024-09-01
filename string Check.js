function XO(str) {
    let lowerCaseStr = str.toLowerCase();
  let xCount = 0;
  let oCount = 0;
  for (let char of lowerCaseStr) {
    if (char === "x"){
      xCount++;
    } else if (char === "o"){
      oCount++;
    }
  }
  return xCount === oCount;
}