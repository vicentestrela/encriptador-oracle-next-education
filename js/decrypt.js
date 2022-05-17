
document.getElementById("decryp").addEventListener("click", decrypt);

function decrypt(){
    
    var txtdecryp = document.getElementById("input").value;
    
    if (txtdecryp != "") {
        var encrypted = txtdecryp.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
        
        document.getElementById("output").value = encrypted;
        document.getElementById("input").value = "";
        document.getElementById("advice").innerHTML = "&nbsp";
    } else {
        document.getElementById("advice").innerText = "Digite um texto a ser descriptografado";
    }
};