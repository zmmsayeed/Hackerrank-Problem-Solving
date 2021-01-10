function diagonalDifference(arr) {
    // Write your code here
    let newArr = [0, 0];
    
    // find the size of the matrix
    let length = arr.length - 1;
    
    // line 10 - adds the elements for the first diagonal
    // line 11 - adds the elements for the second diagonal
    arr.map((elem, index) => {
        newArr[0] += elem[index];
        newArr[1] += elem[length - index]
    })
    
    return Math.abs(newArr[0] - newArr[1]);
}