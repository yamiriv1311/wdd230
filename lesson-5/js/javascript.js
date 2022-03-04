
//Create three variables that hold references to the input, button, and list elements using const.//

const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

//Create an click event listener for the Add Chapter button using addEventListener and an anonymous function.  //
//In the function block for adding a chapter, make sure the input is not blank and if not, do the following: //

button.addEventListener('click', function() {
  

  //Create an li element//
  let li = document.createElement('li');

  //Create a delete button//
  let deleteBtn = document.createElement('button');

  //Populate the li elements textContent or innerHTML with the input//
  li.textContent = input.value;

  //Populate the button textContent with an ❌//
  deleteBtn.textContent = '❌';

  //Append the li element with the delete button//
  li.append(deleteBtn);

  //Append the list element with the li element just created and appended with text and the delete button//
  list.append(li);

  //Add an event listener to the delete button that removes the li element when clicked//
  //Send the focus to the input element//
  deleteBtn.addEventListener('click', function() {
    list.removeChild(li);  
  });
});


//Clean up the successful add of a chapter by changing the input to nothing or the empty string and setting the focus to the input.//
button.onclick = function() {
  let aChapter = input.value;
  input.value = '';
  input.focus();
}