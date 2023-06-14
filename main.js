// _______________SOLAR SYSTEM PROJECT __________________________

let solarInput = document.getElementById("solar-input");
let addBtn = document.getElementById("add-btn");
let solarItemsList = document.getElementById("solar-items-list");

// Add Planets
function addPlanets(){
    let solarInputData = solarInput.value;
    //Creating DOM Elements
    let li = document.createElement('li');
    li.innerText = solarInputData;
    li.style.cssText = "animation-name: slideIn;";
    solarItemsList.appendChild(li);
    solarInput.value = '';
    solarInput.focus();
    // Create Trash Button
    let trashBtn=document.createElement("i");
    trashBtn.classList.add("fas","fa-trash");
    li.appendChild(trashBtn);
    //Delete item from Solar List
    function deleteSolarItem(event){
        if (event.target.classList[0]==="fas"){
            let item = evnt.target.parentElement;
            item.remove();
        }
    }

    
}
// Add an Event Listener to the Button
addBtn.addEventListener('click',addPlanets);
solarItemsList.addEventListener("click",deleteSolarItem);
