import { barcodeView } from "./barcode.js";
import { barcodeViewGroup } from "./barcodeGroup.js";

const barcodes = document.querySelector(".barcodes");
const nameModal = document.querySelector(".nameModal");
const containerOfModal = document.querySelector(".container");
const newGroupNameText = document.querySelector("#newGroupName");
const newGroupAddButton = document.querySelector("#newGroupAdd");
const newGroupCancelButton = document.querySelector("#newGroupCancel");
const reportButton = document.querySelector(".report");
const baseUrl = "https://code128.herokuapp.com";

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
    newGroupNameText.focus();
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
    barcodes.innerHTML = '';
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

reportButton.addEventListener("click", ()=>{
    window.location.href = "mailto:mauryaankit482@gmail.com?subject=Bug%20Found%20in%20Code128&body=Hi Ankit";
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
});