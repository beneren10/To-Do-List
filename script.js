const btn = document.getElementById("button1");
const txtinput = document.getElementById("textinput");


txtinput.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    newItem()
  }
});

function newItem(){
  const divClass = document.createElement("div")
  const divParent = document.createElement("div");
  const divChild = document.createElement("div");
  const divTotal = document.createElement("div");
  
  //put these two inside of a div called "listClass"
  const newContent = document.createTextNode(txtinput.value);
  const childContent = document.createTextNode("Home");

  divChild.appendChild(childContent)
  divParent.appendChild(newContent)
  divClass.appendChild(divTotal)
  divTotal.appendChild(divParent)
  divTotal.appendChild(divChild)

  divClass.id = "list";
  divClass.className = "list"
  divTotal.id = "div_id" ;
  divTotal.className = "listClass";

  document.getElementById("list").appendChild(divClass);  
  txtinput.value = "";
}

function reset(){
    document.getElementById("list").remove();
    const divTotals = document.createElement("div");
    divTotals.id = "list";
    divTotals.className = "list";
    document.getElementById("head").appendChild(divTotals);
}