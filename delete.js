const data = ["a", "1", "334", "4", "R"];
const evenNum = [""];
const oddNum = [""];
const alp = [""];
data.forEach((item) => {
    if (typeof data[i] == "number") {
      if (data[i] % 2 == 0) {
        evenNum.push(data[i]);
      } else {
        oddNum.push(data[i]);
      }
    } else {
      alp.push(data[i]);
    }
  });
console.log(data);
console.log(evenNum);
console.log(oddNum);
console.log(alp);
