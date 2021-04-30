class VideoGame{
    //define all the variables that we want our VideoGame to have. one property for each input on my form.
    title:string; // do not need the let keyword. This is known as a property.
    price:number;
    rating:string;
    isDigitalOnly:boolean;
}

// test code:
// let myGame = new VideoGame();
// myGame.title = "Mario";
// myGame.rating = "E";
// myGame.isDigitalOnly = true;

window.onload = function(){
    let addBtn = 
        <HTMLElement>document.querySelector("input[type=button]")
    addBtn.onclick = addVideoGame;
}

/**
 * Clears all errors in the validation summary
 */
function clearAllErrors(){
    let errSummary = getById("validation-summary");
    errSummary.innerText = "";
}

function addVideoGame(){
    console.log("add video game was called");
    clearAllErrors();

    if(isAllDataValid()){
        let game:VideoGame = getVideoGame();
        displayGame(game);
    }
}

function displayGame(myGame:VideoGame):void{ // passes in videogame object type. Returns void.
    // Display video game below the form
    let displayDiv = getById("display");

    // Create <h2> with game title
    let gameHeading = document.createElement("h2"); // creates an h2 element in memory
    gameHeading.innerText = myGame.title;

    // Create paragraph with game details
    let gameInfo = document.createElement("p");
    let gameMediumDisplay = "";

    if(myGame.isDigitalOnly){
        gameMediumDisplay = "This is a digital only game.";
    }
    else{
        gameMediumDisplay = "You can come buy a physical copy!"
    }
    // gameInfo.innerText = myGame.title + " Has a rating of " +
    //                     myGame.rating + ". It costs " +
    //                     myGame.price + ". It is " + 
    //                     notDigitalDisplay + " digital only.";

    // Alternatively, using template literals:
    gameInfo.innerText = `${myGame.title} has a rating of ${myGame.rating}. It costs $${myGame.price.toFixed(2)}. ${gameMediumDisplay}`

    // Add <h2> in the <div id="display">
    displayDiv.appendChild(gameHeading);
    // Add <p> game info
    displayDiv.appendChild(gameInfo);

}

function getById(id:string){
    return document.getElementById(id);
}


/**
 * Gets all game data from the form
 * and returns it in a VideoGame object
 */
function getVideoGame():VideoGame{ // Returns videogame object
    let game = new VideoGame();    // Create game. You can make as many objects as you want. we'll only use one. 
    //Populate with data from the form:

    // game.title = 
    //     (<HTMLInputElement>document.getElementById("title")).value; 
    // Alternatively:

    let titleInput = <HTMLInputElement>getById("title"); //whole textbox    
    game.title = titleInput.value;

    let priceInput = <HTMLInputElement>getById("price");
    game.price = parseFloat(priceInput.value);

    let ratingInput = <HTMLSelectElement>getById("rating");  // get dropdown selected option
    game.rating = ratingInput.value;

    let digitalOnly = <HTMLInputElement>getById("online");    // get checkbox option
    game.isDigitalOnly = digitalOnly.checked;
    // alternatively:
    // if(digitalOnly.checked){
    //     game.isDigitalOnly = true;
    // }
    // else{
    //     game.isDigitalOnly = false;
    // }    

    //Return game:
    return game;
}

function getInputById(id:string):HTMLInputElement{
    return <HTMLInputElement>document.getElementById(id);
}

function isAllDataValid(){
    let isValid = true;
    
    let title = getInputById("title").value;
    if(title == ""){
        isValid = false;
        addErrorMessage("Title is required");
    }

    let price = getInputById("price").value;
    let priceValue = parseFloat(price);
    if(price == "" || isNaN(priceValue)){
        isValid = false;
        addErrorMessage("Price is required and must be a number";
    }

    let description = getInputById("description").value;
    if(description == ""){
        isValid = false;
        addErrorMessage("Description is required");
    }

    let rating = (<HTMLOptionElement>getById("rating")).value;
    if(rating == ""){
        isValid = false;
        addErrorMsgWithCustomClass("You must choose a rating!", "rating-error");
    }

    return isValid;
}

function addErrorMessage(errMsg:string, ) {
    let errSummary = getById("validation-summary");
    let errItem = document.createElement("li");
    errItem.innerText = errMsg;
    errSummary.appendChild(errItem);
}

function addErrorMsgWithCustomClass(errMsg:string, cssClass:string){
    let errSummary = getById("validation-summary");
    let errItem = document.createElement("li");
    errItem.classList.add(cssClass);
    errItem.innerText = errMsg;
    errSummary.appendChild(errItem);
}
