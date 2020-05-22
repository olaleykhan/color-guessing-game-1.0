let numOfSquares=6;
var colors = createColorCode(numOfSquares);

//    [ "rgb(255, 0, 0)",
//     "rgb(255, 255, 0)",
//     "rgb(255, 0, 255)",
//     "rgb(0, 255, 0)",
//     "rgb(0, 255, 255)",
//     "rgb(0, 0, 255)",
// ]
var squares = document.querySelectorAll(".square");
var pickedColor = colors[pickAColor()];
// console.log(pickAColor());
var colorCodeDisplay = document.querySelector('#color-code-display');
var verdictDisplay = document.getElementById('verdict-display');
let resetButton = document.getElementById('reset-button');
let gameHeader= document.querySelector('.h1');
let easyBtn = document.getElementById('easy-btn');
let hardBtn = document.getElementById('hard-btn');
// The code below calls the html that displays the rules and the  button that opens and closes the rules pop-up
let rulesDisplay= document.querySelector('#rules-display');
let rulesBtn= document.querySelector('#rules');

let closeRulesBtn = document.querySelector('#close');



// give the easy and hard buttons id in the html code
// select them in the javascript 
// add event listeners and make them remove and add the .selected class from the CSS as necessary. 
// make the easy button generate 3 new colors that will fill the first 3 squares
// then hide the 3 remaining squares after making sure they are not part of the 3 generated new colors 
// include a number of squares variable for storing no of squares in easy or hard mode
//
// continue the event listener is hard mode. make it piick a new random color using the pick color function 

easyBtn.addEventListener("click", function(){
    // remove and add the selected css class to depict game mode as appropriate
    this.classList.add('selected');
    hardBtn.classList.remove('selected');

    // call the function that generates color codes using the number of squares
    numOfSquares=3;
    colors= createColorCode(numOfSquares);
    pickedColor = colors[pickAColor()];
    // make the squares take of the created colors
    for(var i=0;i<squares.length;i++){
        // give colors to individual squares
        if (colors[i]) {
            squares[i].style.backgroundColor=colors[i];            
        } else{
            squares[i].style.display='none'
        }
        
    } 
    // make the header display the newly picked color code
    colorCodeDisplay.textContent=pickedColor;
    // reset the background color of game header
    gameHeader.style.backgroundColor='rgb(51, 150, 81)'; 
    // Clear the correct or wrong verdict display
    verdictDisplay.textContent="";
})


hardBtn.addEventListener("click", function(){
       // remove and add the selected css class to depict game mode as appropriate
    this.classList.add('selected');
    easyBtn.classList.remove('selected');
    
    // call the function that generates color codes using the number of squares
    numOfSquares=6;
    colors= createColorCode(numOfSquares);
    pickedColor = colors[pickAColor()];
    // make the squares take of the created colors
    for(var i=0;i<squares.length;i++){
        // give colors to individual squares
            squares[i].style.backgroundColor=colors[i];      
            squares[i].style.display='block';       
    } 
    // make the header display the newly picked color code
    colorCodeDisplay.textContent=pickedColor;
    // reset the background color of game header
    gameHeader.style.backgroundColor='rgb(51, 150, 81)'; 
    // Clear the correct or wrong verdict display
    verdictDisplay.textContent="";
})




// add a new button for try again in the html to reset the game
// call the button in javascript
// set the loginc to reset the game
        // {1. generate a new  set of colors
        // 2. pick a new color from the array
        // 3. change the color code displayed in html to the color above in step 2
        // 4. change the colors of the squares to the colors generated in step 1. 
        // 5. make the background color of the general heading change to the color of the picked square
        // 6. let the background color change back to default when game is reset.
        // 7. change text content of the button from new colors to play again after winning game
        // 8. 
    // }

    resetButton.addEventListener("click", function(){
        colors= createColorCode(numOfSquares);
        pickedColor = colors[pickAColor()];
        colorCodeDisplay.textContent=pickedColor;

        for(var i=0;i<squares.length;i++){
            // give colors to individual squares
            squares[i].style.backgroundColor=colors[i];
        }   
            // reset the background color of game header
            gameHeader.style.backgroundColor='rgb(51, 150, 81)'; 
            
            // change the text of reset button to new colors
            this.textContent="New Colors";     
            
            // Clear the correct or wrong verdict display
            verdictDisplay.textContent="";
    });





// to display the color code in menu
colorCodeDisplay.textContent=pickedColor;


for(var i=0;i<squares.length;i++){
    // give colors to individual squares
    squares[i].style.backgroundColor=colors[i];
    
    // add event listeners to squares 
    squares[i].addEventListener("click", function(){
        // create a variable in which the colorcode of picked square is stored
        var clickedColor = this.style.backgroundColor;
        console.log(clickedColor);
        //  Compare the color code of the clicked square and the picked random color
        if (clickedColor === pickedColor){

            // Call the blend colors function to turns all squares into the correct square's color
            blendColors(pickedColor);
            // Display on the verdict strip that it is correct
            verdictDisplay.textContent="correct";
            // make the header blend with the color of the correct square
            gameHeader.style.backgroundColor=pickedColor;
             // change the text of the reset button from new colors to try again
             resetButton.textContent="Try Again";
        }
        else{
            // make the square disappear by blending it with background color
            this.style.backgroundColor= "#232323";
            // Display on the verdict strip that it is wrong
            verdictDisplay.textContent= "wrong";
        }
    })

}

// This fuction is for turning all other squres into the color of the correct square after the correct one has been picked
function blendColors(color){
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor= color;
    }
}

function pickAColor(){
    let random = Math.floor(Math.random()*colors.length);
    return random;
}

// this 

// If wrong, let the color of squares blend with background
// If right, let the colors blend with the right r=color; picked color( to do this, you need to loop all the squares
// simply writing the code won't work. also, put this in a function to keep the code clean)

// create a strip on the page that displays if color clicked is correct or wrong.
// remove the alerts

// create a function that generates a random number and picks any of the 6 colors of the colors array

// equate the picked color variable to be equal to the result of the fucntion just created  
        /////////////////////////////////////////////////////////////////////////////////////


// generate 6 random colors. do this by creating a separate function that generates 6 random colors

// {*********************Psuedo code************************}

// 1. create a new function that creates diffrent random rgb code completely 
// 2. create another function that calls the function created above. this fucntion pushes the rgb code returned from the fucntion call into an 
        // array. the it returns this array. this array contains all the RGB color codes needed to fill all the squares and then 
        // passed into the variable called color.
// pick one of this colors using the pickAColor function already created 



function generateColorCode(num){

    // generate code for red
    let r = Math.floor(Math.random()*num);
    // generate code for green
    let g = Math.floor(Math.random()*num);
    // generate code for blue
    let b = Math.floor(Math.random()*num);

    let newRGB= `rgb(${r}, ${g}, ${b})`;
    return newRGB;
}

function createColorCode(num){
    // create an empty array
    let arr = [];
    // create a loop that pushes the generated rgb code from the generateColorCode function into the array
    for (let i=0; i<num; i++){
        arr.push(generateColorCode(256));
       
       
    } return arr;
}


// console.log(generateColorCode(256));



// The following codes are used for displaying and closing the rules of the game in the dom

rulesBtn.addEventListener('click',(e)=>{
    
    rulesDisplay.style.display='block'
})

closeRulesBtn.addEventListener('click',(e)=>{
    
    rulesDisplay.style.display='none'
})
