export const tfnValid = (tfn) => {
    let tfnValid = false;
    console.log(`tfn is: ${tfn}`);
    if (tfn.trim().length !== 9) {
        return false;
    }
    const checkSumWeights = [10, 7, 8, 4, 6, 3, 5, 2, 1];
    var sum = 0;
    String(tfn).split('').forEach(function (item, index) {
        sum = sum + (item * checkSumWeights[index]);
    });
    tfnValid = (sum % 11) === 0;

    return tfnValid;
}

export const getTestTFN= () => {
    let seedNumber = Math.floor(100000000 + Math.random() * 900000000);
    const potentialCandidates = [];
    for(var i=1; i<= 51; i++) { potentialCandidates.push(seedNumber + i); }
    const valTFNs = [];
    potentialCandidates.forEach((item) => {
        if(tfnValid(item + '')) {
            valTFNs.push(item);
        }
    });
    return valTFNs[0];
}
