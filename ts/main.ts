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

function addVideoGame(){
    console.log("add video game was called");

    if(isAllDataValid){
        let game = getVideoGame();
        displayGame(game);
    }
}

function displayGame(myGame:VideoGame):void{ // passes in videogame object type. Returns void.
    // TODO: Display video game below the form
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

// ADD VALIDATION CODE**********************************
function isAllDataValid(){
    return true;
}