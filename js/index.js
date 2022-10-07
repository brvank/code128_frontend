import { barcodeView } from "./barcode.js";

const barcodes = document.querySelector(".barcodes");

var addButton = document.querySelector("#add");
addButton.addEventListener("click", ()=>{
    addView("abcd");
});

var addView = function (data){
    barcodes.appendChild(barcodeView(data));
}

var removeView = function (element){
    console.log(element.parent().childNodes());
}
