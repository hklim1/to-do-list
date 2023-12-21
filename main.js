const body = document.body

body.style.backgroundColor = '#F1B6AC'
body.style.color = '#59515E'
body.style.height = '100vh'

const header = document.getElementById("container-heading")
header.color = '#59515E'

const container = document.getElementById("container")

container.setAttribute("style","display:block;width:500px");
container.style.width='500px';
container.style.backgroundColor='#FDE9EA';
container.style.border='solid';
container.style.borderRadius="20px";
container.style.justifyContent="center";
container.style.margin = '0 auto';
container.style.marginTop = '100px'

const todo = document.getElementById("todo")

todo.style.padding = '30px 50px'

const inputBox = document.getElementById("input-box");

inputBox.style.width = "300px"
inputBox.style.height = "30px"
inputBox.style.borderRadius = "20px"

const addButton = document.getElementById('add-button')
addButton.style.width = "60px"
addButton.style.height = "37px"
addButton.style.backgroundColor = '#F1B6AC'
addButton.style.borderRadius = "20px"
addButton.style.marginLeft = "10px"

addButton.addEventListener("mouseenter", function(event) {   
    event.target.style.backgroundColor = "#88DAD9";
    event.target.style.color = "white";
  }, false);
addButton.addEventListener("mouseleave", function( event ) {   
    event.target.style.backgroundColor = "#F1B6AC";
    event.target.style.color = "#59515E";
  }, false);

const listContainer = document.getElementById("list-container");
listContainer.style.listStyleType = "none"
listContainer.style.paddingLeft = "0"

function addTask(){
    if(inputBox.value === ''){
        alert("Please input a task!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        li.setAttribute("style","border:solid;margin:10px 10px 10px 0px;padding:5px;height:25px;display:flex;alignItems:center;justifyContent:center");
        listContainer.appendChild(li); //
        let deleter = document.createElement("deleter")
        deleter.innerHTML = "&#9988";
        li.appendChild(deleter)
        deleter.style.paddingLeft = "10%"
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.style = "text-decoration:line-through"
        e.target.style.backgroundColor = "#869F77";
        e.target.style.color = "white";
        e.target.height = "25px";
        e.target.width="100px";
        saveData();
    }
    else if(e.target.tagName === "DELETER"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("existing", listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("existing")
}

showTask();