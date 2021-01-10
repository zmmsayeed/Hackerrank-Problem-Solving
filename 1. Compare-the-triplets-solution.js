function compareTriplets(a, b) {
    let result = [0,0];
    
    a.forEach((alicePoint, index) => {
        console.log(alicePoint, index)
        if(alicePoint > b[index]) result[0] += 1;
        else if (alicePoint < b[index]) result[1] += 1;
    })
    
    return result
}