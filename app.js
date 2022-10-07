const todoInput = document.querySelector('#todo-input')
const addButton = document.querySelector('#todo-add')
const todoList = document.querySelector('#todo-list')
const sortButton = document.querySelector('#sort-button')
const clearList = document.querySelector('#clear-list')
const editInput = document.querySelector('#edit-input')
const applyEditButton = document.querySelector('#apply-edit-button')
const listItems = [];
const selector = document.querySelector('#sel')

//Creates list items on page
const createList = (list) => {
  for(let item of list){
    let temp = document.createElement('li')
    temp.textContent = item
    todoList.append(temp)
    
  }
}
//Creates select-options on page
const createOptions = (list) => {
  for(let item of list){
    let temp = document.createElement('option')
    temp.value = item
    temp.textContent = item
    selector.append(temp)
  }
}

//Sorts the list
const sortList = () => listItems.sort()

//Removes all elements inside <ol> and <select>
const clearLists = () => {
  todoList.innerHTML = ""
  selector.innerHTML = ""
  editInput.value = ""
}

//Checks if list item & select option already exists, if not; adds it to the list array and updates list & select on website
const pushList = () =>{
  for(let i = 0; i <= listItems.length; i++){
    if(listItems.includes(todoInput.value) || todoInput.value == ""){
      todoInput.value=""
    }
    else{
      clearLists()
      listItems.push(todoInput.value)
      createList(listItems);
      createOptions(listItems);
    } 
  }
}

//Finds selected list item in array and replaces it with value of edit textbox
const editTodo = (list) => {
  for(let i = 0; i < list.length; i++){
    if(selector.selectedIndex == i){
      list.splice(i, 1, editInput.value)
    }
  }
}

//Runs pushList() function
addButton.addEventListener('click', (e) => {
  e.preventDefault()
  pushList(listItems)
})

//Runs sortList() function and updates list on website
sortButton.addEventListener('click', (e) => {
  e.preventDefault()
  sortList()
  clearLists()
  createList(listItems)
  createOptions(listItems)
})

//Empty list array
clearList.addEventListener('click', (e) => {
  e.preventDefault()
  listItems.length = 0;
  clearLists()
})


//Applies array changes to the website
applyEditButton.addEventListener('click', (e) => {
  e.preventDefault()
  editTodo(listItems)
  clearLists()
  createList(listItems)
  createOptions(listItems)
})

