
/* 
 * Since javascript considers all integers to be  64 bits by default,
 * we dont need to consider defining large int. 
 * Required to define bigInt in Java, C#, typescript
 * 
*/

// Complete the aVeryBigSum function below.
function aVeryBigSum(ar) {
    let sum = 0;    
    ar.map(elem => sum += elem);
    return sum
}