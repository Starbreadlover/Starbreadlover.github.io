function convert () {
    let meters = document.getElementById("Meter").value*1;
    let feet = meters * 3.28
    document.getElementById ("display").innerHTML = meters + " Meters is = " + feet.toFixed(2) + " in feet";
}