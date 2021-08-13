let qrcode = select("img")
let qrtext = select("textarea")
let qrbutton = select("button")

qrbutton.addEventListener("click", generateQRcode)

function generateQRcode(){
    let size = "1000x1000"
    let data = qrtext.value
    let baseURL = "https://api.qrserver.com/v1/create-qr-code/"

    let url = `${baseURL}?data=${data}&size=${size}`

    qrcode.src = url
}

function select(element) {
    return document.querySelector(element)
}