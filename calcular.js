function multiplicar() {
    var s1 = document.getElementById("txt1").value;
    var s2 = document.getElementById("txt2").value;
    var s3 = s1 * s2;
    window.alert(`Resultado:${s3}`);
    }

function divisao(){
    var s1 = document.getElementById("txt1").value;
    var s2 = document.getElementById("txt2").value;
    var s3 = s1 / s2;
    window.alert(`Resultado:${s3}`);
}
function soma(){
    var s1 = document.getElementById("txt1").value;
    var s2 = document.getElementById("txt2").value;
    var s3 = Math.round(s1) + Math.round(s2);
    window.alert(`Resultado:${s3}`);
}
function menos(){
    var s1 = document.getElementById("txt1").value;
    var s2 = document.getElementById("txt2").value;
    var s3 = s1 - s2;
    window.alert(`Resultado:${s3}`);
}