import { barcodeView } from "./barcode.js";
import { barcodeViewGroup } from "./barcodeGroup.js";

const barcodes = document.querySelector(".barcodes");
const nameModal = document.querySelector(".nameModal");
const containerOfModal = document.querySelector(".container");
const newGroupNameText = document.querySelector("#newGroupName");
const newGroupAddButton = document.querySelector("#newGroupAdd");
const newGroupCancelButton = document.querySelector("#newGroupCancel");
const baseUrl = "http://localhost:8081";

var addView = function (data){
    barcodes.appendChild(barcodeView(data, baseUrl));
}

var addViewGroup = function (name){
    barcodes.appendChild(barcodeViewGroup(name, baseUrl));
}

var showNameModal = function(){
    containerOfModal.classList.remove("exit");
    containerOfModal.classList.add("enter");
    nameModal.style.display = "flex";
}

var hideNameModal = function(){
    containerOfModal.classList.remove("enter");
    containerOfModal.classList.add("exit");
    setTimeout(()=>{
        nameModal.style.display = "none";
    }, 500);
}

var addButton = document.querySelector("#add");
addButton.addEventListener("click", ()=>{
    addView("abcd");
});

var addGroupButton = document.querySelector("#addGroup");
addGroupButton.addEventListener("click", ()=>{
    showNameModal();
});

var clearAllButton = document.querySelector("#clearAll");
clearAllButton.addEventListener("click", ()=>{
    var length = barcodes.childNodes.length;
    for(var i = 0;i<length;i++){
        var closeButton = barcodes.childNodes[i].querySelector("#barcode-close");
        closeButton.click();
    }
});

newGroupNameText.addEventListener("keypress", (e)=>{
    if(e.key == 'Enter'){
        newGroupAddButton.click();
    }
});

newGroupAddButton.addEventListener("click", ()=>{
    addViewGroup(newGroupNameText.value);
    newGroupNameText.value = "";
    hideNameModal();
});

newGroupCancelButton.addEventListener("click", ()=>{
    hideNameModal();
});

window.addEventListener("click", (e)=>{
    if(e.target == nameModal){
        hideNameModal();
    }
});

window.addEventListener("keydown", (e)=>{
    if(e.key == 'Escape'){
        hideNameModal();
    }
})