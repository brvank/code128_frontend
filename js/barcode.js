export function barcodeView(data, baseUrl){
    //create parent element
    var newView = document.createElement("div");
    newView.setAttribute("class", "barcode");

    //create input view
    var inputView = document.createElement("input");
    inputView.setAttribute("id", "barcode-data");
    inputView.setAttribute("type", "text");
    inputView.setAttribute("placeholder", data);

    //crete copy box view
    var copyView = document.createElement("div");
    copyView.setAttribute("id", "barcode-copy");
    copyView.innerHTML = "Copy";

    //create barcode image
    var barcodeImageView = document.createElement("img");
    barcodeImageView.setAttribute("id", "barcode-image");
    barcodeImageView.setAttribute("alt", "barcode");
    barcodeImageView.setAttribute("src", baseUrl + "/barcode/code128.png?data=");

    //adding button
    var buttonView = document.createElement("button");
    buttonView.setAttribute("id", "barcode-button");
    buttonView.innerHTML = "Create Barcode";

    //create close view
    var closeView = document.createElement("img");
    closeView.setAttribute("id", "barcode-close");
    closeView.setAttribute("alt", "close");
    closeView.setAttribute("src", "../res/close-icon.png");
    closeView.setAttribute("height", "20px");
    closeView.setAttribute("width", "20px");

    //adding event listeners
    copyView.addEventListener("click", ()=>{
        navigator.clipboard.writeText(inputView.value);
    });


    buttonView.addEventListener("click", ()=>{
        barcodeImageView.src = baseUrl + "/barcode/code128.png?data=" + inputView.value;
    });


    closeView.addEventListener("click", ()=>{
        newView.classList.replace("add", "remove");
        newView.style.overflow = "hidden";
        setTimeout(function(){
            newView.remove();
        }, 500);
    });

    inputView.addEventListener("keypress", (e)=>{
        if(e.key == 'Enter'){
            buttonView.click();
        }
    });

    //appending all childs
    newView.appendChild(inputView);
    newView.appendChild(copyView);
    newView.appendChild(barcodeImageView);
    newView.appendChild(buttonView);
    newView.appendChild(closeView);

    //add animation class
    newView.classList.add("add");

    return newView;
}