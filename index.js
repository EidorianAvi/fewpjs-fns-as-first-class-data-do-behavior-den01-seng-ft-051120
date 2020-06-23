/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
<<<<<<< HEAD

function greet(string) {

  let hourValue = string.split(':')

  if (hourValue[0] < 12){
    return ("Good Morning")
  }
  if (hourValue[0] > 12 && hourValue[0] < 17) {
    return ("Good Afternoon")
  }
  if (hourValue[0] > 17) {
    return ("Good Evening")
  }


function greet(string) {
  console.log(string)
>>>>>>> c19131bf7c6ef53deab71635471470f2fac4f029
}

/* Write your implementation of displayMessage() */
function displayMessage(string) {
    let content = document.getElementById('greeting');
    let body = document.querySelector('body');
    content.innerText = string;
    body.appendChild(content);
}