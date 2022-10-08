import { barcodeView } from "./barcode.js";

var show = true;

export function barcodeViewGroup(name, baseUrl){
    //new view
    var newView = document.createElement("div");
    newView.setAttribute("class", "barcodeGroup");

    //options view
    var optionsView = document.createElement("div");
    optionsView.setAttribute("class", "groupOptions");

    //group name
    var groupName = document.createElement("input");
    groupName.setAttribute("id", "groupName");
    groupName.setAttribute("type", "text");
    groupName.setAttribute("placeholder", "Group Title");

    //add barcode button
    var addBarcodeButton = document.createElement("button");
    addBarcodeButton.setAttribute("id", "addBarcode");
    addBarcodeButton.innerHTML = "+";

    //show-hide img
    var showHideImage = document.createElement("img");
    showHideImage.setAttribute("id", "showHide");
    showHideImage.setAttribute("src", "../res/showHide.png");

    //close-view img
    var closeViewImage = document.createElement("img");
    closeViewImage.setAttribute("id", "closeView");
    closeViewImage.setAttribute("src", "../res/close-icon.png");

    //barcodes group
    var barcodeGroupView = document.createElement("div");
    barcodeGroupView.setAttribute("class", "groupBarcodes");

    //adding properties
    groupName.value = name;

    addBarcodeButton.addEventListener("click", ()=>{
        barcodeGroupView.appendChild(barcodeView("abcd", baseUrl));
    });

    showHideImage.addEventListener("click", ()=>{
        show = !show;
        if(show){
            barcodeGroupView.style.display = "block";
            showHideImage.style.transform = 'rotateX(0deg)';
        }else{
            barcodeGroupView.style.display = "none";
            showHideImage.style.transform = 'rotateX(180deg)';
        }
    });

    closeViewImage.addEventListener("click", ()=>{
        newView.remove();
    });

    //combining views
    optionsView.appendChild(groupName);
    optionsView.appendChild(addBarcodeButton);
    optionsView.appendChild(showHideImage);
    optionsView.appendChild(closeViewImage);

    newView.appendChild(optionsView);
    newView.appendChild(barcodeGroupView);

    return newView;
}