//Selecting the Elements
const clear = document.querySelector('.clear');
const dateElement = document.getElementById('date');
const list = document.getElementById('list');
const input = document.getElementById('ipnut');

//Class names
const CHECK = "fa-check-cirlce";
const UNCHECK = "fa-cirlce-thin"
const LINE_THROUGH = "lineThrough"

//Show today's date
let today = new Date();
let options = {weekday:'long', month:'short', day:'numeric'};

function addToDo(todo, id, done, trash){
    if(trash){return;}
    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";
const text = `<li class="item">
                <i class="co fa ${DONE}" job="complete" id="${id}"></i>
                <p class="text ${LINE}">${todo}</p>
                <i class="co fa fa-trash-o" job="delete" id="${id}"></i>
            </li>`
const position = "beforeend";
list.insertAdjacentHTML(position, text);
}

let list = [];
let id = 0;
LIST =[{},{},,,];

LIST[0] =
{
    name: "Something",
    id: 0,
    done: false,
    trash: false
}

LIST[1] = 
{
    name: "Something else",
    id: 1,
    done: false,
    trash: false
}





document.addEventListener('keyup', function(event){

    if(event.key == 13){
        const todo = input.value;
        if(todo){
            addToDo(todo,id, false, false );
            LIST.push(
                {
                    name: todo,
                    id: id,
                    done: false,
                    trash: false
            }
            );
            input.value = "";
            id++
        }
    }
});

function completeTodo(element){
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector('.text').classList.toggle(LINE_THROUGH);
    LIST[element.id].done = LIST[element.id]. done ? false: true;
}

function removeToDo(){
    element.parentNode.parentNode.removeChild(element.parentNode);
    LIST[element.id].trash = true;
}

list.addEventListener('click', function(event){
    let element = event.target;
    const elementJob = event.target.attributes.job.value;
    if(elementJob == "complete"){
        completeTodo(element);
    } else if (elementJob == "delete"){
        removeToDo(element)
    }
});

localStorage.setItem('TODO', JSON.stringify(LIST));
let data = localStorage.getItem("TODO");
if(data){
    LIST = JSON.parse(data);
    loadToDo(LIST);
    id = LIST.length; 
} else {
    LIST = [];
    id = 0;
}


function loadToDo(array){
    array.forEach(function(item){
        addToDo(item.name, item.id, item.done, item.trash);
    });
}

clear.addEventListener('click', function(){
    localStorage.clear();
    location.reload();
});


dateElement.innerHTML = today.toLocaleDateString("en-US", options);
    


