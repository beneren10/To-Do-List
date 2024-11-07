const btn = document.getElementById("button1");
const txtinput = document.getElementById("textinput");
let counter = 0;

txtinput.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    newItem()
  }
});

function newItem(){
  if (txtinput.value === ""){
    alert("You didn't enter anything into the text box")
  } else {
    counter++
    // initialise three divs to make 1 for the list item and 2 for in the list
    const divParent = document.createElement("div");
    const divChild = document.createElement("div");
    const divTotal = document.createElement("div");
    const button2 = document.createElement("button")
    
    //put these two inside of a div - (divTotal) called "listClass"
    const newContent = document.createTextNode(txtinput.value);
    const childContent = document.createTextNode(counter);

    divChild.appendChild(childContent)
    divParent.appendChild(newContent)
    
    // put the data inside the div to add to the HTML
    divTotal.appendChild(divParent)
    divTotal.appendChild(divChild)

    divTotal.id = "div_id" ;
    divTotal.className = "listClass";

    document.getElementById("list").appendChild(divTotal);  

    // clear the input box at the end
    txtinput.value = "";
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

function deleteItem(){

}