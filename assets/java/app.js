const buttonChoices = ["Formula 1", "Ferrari F1", "Red Bull F1", "Aryton Senna", "Michael Schumacher", "Kimi Raikkonen", "Fernando Alonso", "Jenson Button", "Mark Webber"]


let searchTerm = '';
//let URL = "https://api.giphy.com/v1/gifs/search?api_key=LLHzPvE7ufGbvRc80wsluvMS4Ub9hVwu&q=" + searchTerm + "&limit=10&offset=0&rating=Y&lang=en";
let URL = '';

function pushButtons() {
    for (let i = 0; i < buttonChoices.length; i++) {
        $("#buttons").append(`<button type="button" class="clicked" onClick="buttonClicked(this.id)" id="${buttonChoices[i]}">${buttonChoices[i]}</button>`);

    };

   
};

function buttonClicked(button_id) {
    URL = "https://api.giphy.com/v1/gifs/search?api_key=LLHzPvE7ufGbvRc80wsluvMS4Ub9hVwu&q=" + button_id + "&limit=10&offset=0&rating=Y&lang=en";
    console.log(button_id);
    console.log(URL);
};



// $.ajax({

// }).then(function(response){

// });



pushButtons(buttonChoices);