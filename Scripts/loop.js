function compute() {

    let n = parseInt(document.getElementById("int").value * 1);
    let factorial = 1;
    let i = 1;

    while (i <= n) {
        factorial *= i;
        i++
    }

    let sum = 0;
    let j = 1;

    do{
        sum += j;
        j++
    } while (j <= n);

    let ave = 0;

    for (let z = 1; z <= n; z++ ) {
        ave = sum / n;
    }

    document.getElementById ("display").innerHTML = "Factorial: = " + factorial + "<br>" + "Sum: " + sum + "<br>" + "Average: " + ave;
    console.log ("hi diday");



}