export function barcodeView(data){
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
    barcodeImageView.setAttribute("src", "http://localhost:8080/barcode/code128.png?data=");

    //adding button
    var buttonView = document.createElement("button");
    buttonView.setAttribute("id", "barcode-button");
    buttonView.innerHTML = "Create Barcode";

    //create close view
    var closeView = document.createElement("img");
    closeView.setAttribute("id", "barcode-close");
    closeView.setAttribute("src", "../res/close-icon.png");
    closeView.setAttribute("height", "20px");
    closeView.setAttribute("width", "20px");

    //adding event listeners
    copyView.addEventListener("click", ()=>{
        navigator.clipboard.writeText(inputView.value);
    });


    buttonView.addEventListener("click", ()=>{
        barcodeImageView.src = "http://localhost:8080/barcode/code128.png?data=" + inputView.value;
    });


    closeView.addEventListener("click", ()=>{
        newView.remove();
    });

    inputView.addEventListener("keydown", (e)=>{
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

    return newView;
}