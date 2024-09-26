function createGrid (squares, width, height){
    const gridContainer = document.querySelector("#grid-container");
    for (let i = 1; i <= squares*squares; i++){
        const div = document.createElement("div");
        div.style.width = width;
        div.style.height = height;
        div.classList.add("grid-box");
        if (i == 1){
          div.classList.add("top-left");
        }
        else if (i == squares){
          div.classList.add("top-right");
        }
        else if (i == squares*(squares-1)+1){
          div.classList.add("bottom-left");
        }
        else if (i == squares*squares){
          div.classList.add("bottom-right");
        }
        div.setAttribute('draggable', 'false');
        div.addEventListener('dragstart', (e) => e.preventDefault());
        div.addEventListener('mousedown', () => {
        isMouseDown = true;
        div.classList.add('change-color'); // Change color when mouse is clicked down
      });
  
      div.addEventListener('mouseover', () => {
        if (isMouseDown) {
          div.classList.add('change-color'); // Continue changing color on mouseover if mouse is down
        }
      });
  
      gridContainer.appendChild(div);
    }
    
      // Stop color change when mouse is released
    document.addEventListener('mouseup', () => {
      isMouseDown = false;
    });
    
  }
  
  function getUserInput (){
    const gridContainer = document.querySelector("#grid-container");
    let userInput = prompt("Please enter amount of squares (Max. 100)");
    if (userInput > 100){
        return alert("Can't provide grid with more than 100 squares. Please enter amount of squares that is less than 100!")
    }
    let userWidth = 500/userInput-2 + "px";
    let userHeight = 500/userInput-2 + "px";
    gridContainer.textContent = "";
    createGrid(userInput, userWidth, userHeight);
  }
  
  function clearGrid (){
    const list = document.querySelectorAll(".change-color")
    for (let k = 0; k < list.length; ++k){
      list[k].classList.remove("change-color");
    }
  }
  
  let isMouseDown = false;
  
  let initialGrid = 16;
  let initialWidth = 500/initialGrid-2 + "px";
  let initialHeight = 500/initialGrid-2 + "px";
  createGrid(initialGrid, initialWidth, initialHeight);
  
  const sendPromptBtn = document.querySelector("#send-prompt");
  sendPromptBtn.addEventListener("click", getUserInput);
  
  const clearBtn = document.querySelector("#clear");
  clearBtn.addEventListener("click", clearGrid);