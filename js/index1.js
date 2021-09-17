function addition() {

    let num1, num2, result;
    num1 = document.getElementById('n1').value;

    num2 = document.getElementById("n2").value;

    result = (Number(num1) + Number(num2));

    document.getElementById("result").innerHTML = result;

}

function subtraction() {
    let num1, num2, result;
    num1 = document.getElementById('n1').value;

    num2 = document.getElementById("n2").value;

    result = (Number(num1) - Number(num2));

    document.getElementById("result").innerHTML = result;
}

function multiplication() {
    let num1, num2, result;
    num1 = document.getElementById('n1').value;

    num2 = document.getElementById("n2").value;

    result = (Number(num1) * Number(num2));

    document.getElementById("result").innerHTML = result;
}

function division() {
    let num1, num2, result;
    num1 = document.getElementById('n1').value;

    num2 = document.getElementById("n2").value;

    if (num2==0) {
        alert ('На ноль делить нельзя!');
    }
    else {
    result = (Number(num1) / Number(num2));

    document.getElementById("result").innerHTML = result;}
    

}

