const buttonChoices = ["Formula 1", "Ferrari F1", "Red Bull F1", "Aryton Senna", "Michael Schumacher", "Kimi Raikkonen", "Fernando Alonso", "Jenson Button", "Mark Webber"]


let searchTerm = '';
let URL = '';


function pushButtons() {
    for (let i = 0; i < buttonChoices.length; i++) {
        $("#buttons").append(`<button type="button" class="clicked" onClick="buttonClicked(this.id)" id="${buttonChoices[i]}">${buttonChoices[i]}</button>`);

    };

};

function buttonClicked(button_id) {
    searchTerm = button_id.replace(' ', '+');
    URL = "https://api.giphy.com/v1/gifs/search?api_key=LLHzPvE7ufGbvRc80wsluvMS4Ub9hVwu&q=" + searchTerm + "&limit=10&offset=0&rating=Y&lang=en";
    let output = [];
    $.ajax({
        url: URL,
        method: "GET"
    }).then (function(response) {
        output = response;
        console.log(response);
        console.log("1 " + output);
    });
    for (let i = 0; i < output.length; i++) {
        console.log("2 " + output);
        $("#content").append("<div>works</div>");
    };
};




pushButtons(buttonChoices);