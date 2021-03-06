var newLabel = document.getElementById("label");
var newParagraph = document.getElementById("new-task");
var addButton = document.getElementsByTagName("button")[0]; //firtst button
var searchButton = document.getElementsByTagName("button")[1]; //second button
var completedTaskHolder = document.createElement("ul");     //new ul list

//var listItem = document.createElement("li");
//listItem.className = "article";

//Append ul list to secondary-content
function createNewUlList() {
    completedTaskHolder.id = 'completed-tasks';
    var div = document.getElementById("secondary-content");
    div.appendChild(completedTaskHolder);
}
createNewUlList();

//New task list item
var createNewTaskElement = function (taskLabel, taskString) {
    //Create list item
    var listItem = document.createElement("li");
    //label
    var label = document.createElement("label");
    //paragraph (text)
    var paragraph = document.createElement("p");
    //delet button
    var createXButton = document.createElement("button");

    //Each element needs modifying  
    createXButton.className = 'delete-task';
    listItem.className = "article";
    label.type = "label";

    //Each element needs appending
    listItem.appendChild(createXButton);
    listItem.appendChild(label);
    listItem.appendChild(paragraph);

    createXButton.innerText = 'x';
    label.innerText = taskLabel;
    paragraph.innerText = taskString;

    //Delete a task
    var deleteTask = function () {
        console.log("Delete task");

        var listItem = this.parentNode;
        var ul = listItem.parentNode;

        if (confirm("Do you really want to delete the selected article?") == true) {
            //Remove the parent list item from the ul
            ul.removeChild(listItem);
        }
    }

    //Set the click handler to delet function
    createXButton.addEventListener("click", deleteTask);

    return listItem;
}

//Add a new task
var addTask = function () {
    console.log("Add Task...");
    //console.log(newLabel.value);
    //console.log(newParagraph.value);

    //Create a new list item with the text from #label #new-task:
    //make sure the task has something there
    if (newLabel.value.length && newParagraph.value.length >= 1) {
        var listItem = createNewTaskElement(newLabel.value, newParagraph.value);
        //Append listItem to completedTaskHolder
        completedTaskHolder.appendChild(listItem);
        //Make input blank after submitting
        newLabel.value = "";
        newParagraph.value = "";
    } else {
        alert("Please type something on the fields!")
    }
}

//Set the click handler to addTask function
addButton.addEventListener("click", addTask);

//Set Enter to addTask function

newParagraph.addEventListener("keydown", function(event) {   
    if (event.keyCode == 13) {
        event.preventDefault();
        addButton.click();
    }
});









