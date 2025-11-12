function convert () {
    let feet = document.getElementById("Feet").value*1;
    let meters = feet / 3.28084;
    document.getElementById("display").innerHTML = feet + " Feet to Meters is = " + meters.toFixed(2) +"m";

}