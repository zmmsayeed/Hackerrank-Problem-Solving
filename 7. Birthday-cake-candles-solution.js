function birthdayCakeCandles(candles) {
    // Write your code here
    let finalArr = [0, 1];
    candles.forEach(elem => {
        if (elem > finalArr[0]) {
            finalArr[0] = elem;
            finalArr[1] = 1;
        }
        else if (elem === finalArr[0]) finalArr[1] += 1;
    })
    
    return finalArr[1]
}