//https://blog.codeanalogies.com/2016/04/11/javascript-callbacks-explained-using-minions/

var buttonEnter = document.getElementById("enter");
var input = document.getElementById("userinput");
var ol = document.querySelector("ol")
//for delete/Done item
var li = document.getElementsByTagName("li");


function inputLength(){
    return input.value.length;
}

function createListElement(){

    //Create item list
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value + " "));
    ol.appendChild(li);
    input.value = "";

    //Create checkbox
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox"; 
    li.appendChild(checkbox);
    //checkbox.name = "slct[]";
    //checkbox.value = " "; 
    //checkbox.appendChild(document.createTextNode(""))

    //====Create delete button
    var btn = document.createElement("button");
    btn.appendChild(document.createTextNode("D"));
    li.appendChild(btn);
    btn.onclick = removeParent;
}

//3rd Item
function addListAfterClick(){
    if(inputLength() > 0){
        createListElement();    
    } 
}
buttonEnter.addEventListener("click", addListAfterClick);

function addListAfterkeyPress(event){
    if(inputLength() > 0 && event.keyCode==13){
        createListElement(); 
    }
}
input.addEventListener("keypress", addListAfterkeyPress);

//===Strickthrough on the item
ol.onclick=function(event){
    var target=event.target;
    target.classList.toggle("done");
}
//==Delete the item
function deleteButton(){
    btn.onclick=removeParent;
}
function removeParent(event){
	event.target.parentNode.remove();
}
//==Check and Strickthrough on the item
// function updateItem(){
//     if (checkbox.checked){
//       checkbox.style.textDecoration="line-through";
//     }
//   }
