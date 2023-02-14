function findSumOfDistinctElements(setA, setB) {
    let sum = 0;
    for (var i = 0; i < setA.length; i++) {
        if (!setB.includes(setA[i])) {
        sum += setA[i];
        }
    }
    for (let i = 0; i < setB.length; i++) {
    if (!setA.includes(setB[i])) {
        sum += setB[i];
        }
    }
    return sum;
}

let setA = [3, 1, 7, 9];
let setB = [2, 4, 1, 9, 3];
//distinct numbers = [2, 7, 4];
console.log(findSumOfDistinctElements(setA, setB));