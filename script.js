const btn = document.getElementById("button1");
const txtinput = document.getElementById("textinput");
const exLine = document.querySelector('#list li')
const dateInput = document.querySelector('#time-input')

let counter = 0;

txtinput.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    newItem()
  }
});

function newItem(){

  if (txtinput.value === "" || !dateInput.value){

    alert("You didn't enter all the details")

  } else {
    exLine.remove()
    counter++
    // initialise three divs to make 1 for the list item and 2 for in the list
    const divParent = document.createElement("div");
    const divChild = document.createElement("div");
    const icon = document.createElement("i");
    const bomb = document.createElement("i");
    
    // Add class to DivChild
    divChild.className = 'icon-box'

    // divChild.appendChild(childContent)
    divChild.appendChild(bomb)
    divChild.appendChild(icon)
    divParent.innerHTML = `Date: ${dateInput.value} <br> Item: ${txtinput.value}` 
 
    // put the data inside the div to add to the HTML
    divParent.appendChild(divChild)

    divParent.id = "div_id";
    divParent.className = "listClass";
    bomb.className = "fa-solid fa-bomb";
    icon.className = "fa-solid fa-bell";
    icon.id = "icon";
    bomb.id = "bomb";

    //icon for checking an item off the list 
    icon.addEventListener("click",function(){
      // icon.classList.toggle('toggle-class');
      divParent.classList.toggle('listClass-complete')
    });

    bomb.addEventListener("click",function(){
      divParent.remove();
    });

    document.getElementById("list").appendChild(divParent);  

    // clear the input box at the end
    txtinput.value = "";
    dateInput.value = "";

  }
}

function reset(){
    //removes the list class and all entries
    document.getElementById("list").remove();

    //creates a new class called list so newItem() can work
    const divTotals = document.createElement("div");
    divTotals.id = "list";
    divTotals.className = "list";
    document.getElementById("head").appendChild(divTotals);

    //resets counter 
    counter = 0;
}


