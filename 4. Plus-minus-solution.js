// Complete the plusMinus function below.
function plusMinus(arr) {
    let arrLength = arr.length;

    // first element contains the number of positive numbers
    // second element contains the number of negative numbers
    // third elements contains the number of zero elements
    let newArr = [0, 0 ,0];

    arr.map(elem => {
        if (elem > 0) newArr[0] += 1;
        else if(elem < 0) newArr[1] += 1;
        else if (elem === 0) newArr[2] += 1;
    })
    
    console.log((newArr[0] / arrLength).toFixed(6));
    console.log((newArr[1] / arrLength).toFixed(6));
    console.log((newArr[2] / arrLength).toFixed(6))
}
