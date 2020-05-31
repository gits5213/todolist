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
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ol.appendChild(li)
    input.value = "";

    //======
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

//==========
ol.onclick=function(event){
	var target=event.target;
	target.classList.toggle("done");
}

// function listLength(){
// 	return li.length;
// }

function deleteButton(){
	// var btn=document.createElement("button");
    // btn.appendChild(document.createTextNode("Delete!"));
    // li[i].appendChild(btn);
    btn.onclick=removeParent;
}

// for( i=0;i<listLength();i++){
//     deleteButton();
// }

function removeParent(event){
	event.target.parentNode.remove();
}


//2nd Attempt
// buttonEnter.addEventListener("click", function(){   
//     if(inputLength() > 0){
//         createListElement();    
//     }   
// })

// input.addEventListener("keypress", function(event){   
//     if(inputLength() > 0 && event.keyCode==13){
//         createListElement(); 
//     }   
// })



//Step by Step from cratch First Attempt 
// //add eventListner
// buttonEnter.addEventListener("click", function(){   
//         //adding list with only typing
//         if(input.value.length > 0){
//             //adding list including not typing
//             var li = document.createElement("li");
//             li.appendChild(document.createTextNode(input.value));
//             ul.appendChild(li)
//             //after clicking I want input box is automatically empty
//             input.value = "";
            

//         }   
//  })

//  //Keboard enter event
//  input.addEventListener("keypress", function(){   
//      //Keboard enter event
//     if(input.value.length > 0 && event.keyCode==13){
//         var li = document.createElement("li");
//         li.appendChild(document.createTextNode(input.value));
//         ul.appendChild(li)
//         input.value = "";
//     }   
// });
