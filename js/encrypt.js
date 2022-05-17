document.getElementById("encryp").addEventListener("click", encrypt);

function encrypt(){

    var txtencryp = document.getElementById("input").value;
    if (txtencryp != "") {
    var encrypted = txtencryp.split(/e/g).join("enter").split(/i/g).join("imes").split(/a/g).join("ai").split(/o/g).join("ober").split(/u/g).join("ufat");

    document.getElementById("output").value = encrypted;
    document.getElementById("input").value = "";
    document.getElementById("advice").innerHTML = "&nbsp";
    } else {
    document.getElementById("advice").innerText = "Digite um texto a ser criptografado";
    }
    console.log(encrypted);
};