function miniMaxSum(arr) {
    // Sorting the array
    let sortedArr = arr.sort();
    
    // Finding the length of the array
    let arrLength = arr.length;
    let minSum = 0, 
        maxSum = 0;

    // For loop to find the sum of elements except the last element
    for(let i = 0; i < arrLength - 1; i++) {
        minSum += sortedArr[i];
    }
    
    // For loop to find the sum of elements except the first element
    for(let i = 1; i < arrLength; i++) {
        maxSum += sortedArr[i];
    }
    
    console.log(minSum, maxSum)
}