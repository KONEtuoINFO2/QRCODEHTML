function generer_code_qr() {
    let contentInput = document.getElementById('text').value;
    let qrcodeEspace = document.getElementById('qrcode');
    if(contentInput) {
        //Effacer le QRCode 
        document.getElementById("qrcode").innerHTML = ""

        //console.log(contentInput)
        //Genere moi le code QR
         new QRCode(qrcodeEspace,
            contentInput);
    }
    document.getElementById('download').style.display = "inline-block"
}

function download(){
    let img = document.querySelector('#qrcode img');
    if (img) {
        let lien = document.createElement('a');
        console.log(lien)
        lien.href = img.src;
        lien.download = 'qr-code-maker.png';
        document.body.appendChild(lien);
        lien.click();
    }
}

