export function colourCorrectness(col1, col2) {
    // calculate correctness in percentage
    let nanCount = 0;
    let temp = col2[0];
    col2[0] = col2[0] * Math.cos(col2[1]);
    col2[1] = temp * Math.sin(col2[1]);
    // col1[2] = 0- col1[2];
    let correct = 0;
    for (let i = 0; i < 3; i++) {
        correct += Math.pow((col1[i] - col2[i]),2);
        console.log(col1[i], col2[i]);
        if (isNaN(col2[i])) {
            nanCount++;
        }
    }
    correct = Math.sqrt(correct);
    correct = 100 - ((correct / 720)*100);

    if (nanCount > 0) {
        return -1;
    }
    console.log(correct);
    return correct;
}