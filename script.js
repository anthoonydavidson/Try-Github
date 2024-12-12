const taskInput = document.getElementById("taskInput")
const addTaskbutton = document.getElementById("addTaskButton")
const taskList = document.getElementById("taskList")

addTaskbutton.addEventListener("click", addTask)

taskInput.addEventListener("keypress", function(enter) {
    if (enter.key === "Enter") {
        addTask()
    }
})

function addTask() {
    console.log("Add Task Baru Berhasil!")

    // Step 1: Store the task value
    const taskText = taskInput.value.trim()
    if (taskText === "") return

    //Step 2: Create new list item
    const li = document.createElement("li")
    li.className = "taskItem"

    // Step 3: Create new paragraph
    const p = document.createElement("p")
    p.textContent = taskText

    // Step 4: Create new div
    const div = document.createElement("div")

    // Step 5: Create checkbox
    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.addEventListener("change", function() {
        if (this.checked) {
            li.classList.add("complete")
        }
        else {
            li.classList.remove("complete")
        }
    })

    // Step 6: Create delete button
    const deleteButton = document.createElement("button")
    deleteButton.textContent = "Delete"
    deleteButton.className = "delButton"

    deleteButton.addEventListener("click", function() {
        taskList.removeChild(li)
    })

    // Step 7: Combine all of them
    div.appendChild(checkbox)
    div.appendChild(deleteButton)

    li.appendChild(p)
    li.appendChild(div)

    taskList.appendChild(li)

    taskInput.value = ""
}