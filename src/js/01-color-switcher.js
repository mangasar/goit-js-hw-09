
const colorChangeFn = function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }
 
  const buttonStart = document.querySelector('button[data-start]').addEventListener('click',() => {

    intervalId = setInterval(() => {
        document.body.style.backgroundColor = colorChangeFn();
      }, 1000);
    });

    const buttonStop = document.querySelector('button[data-stop]').addEventListener('click',() => {
        clearTimeout(intervalId)
    })