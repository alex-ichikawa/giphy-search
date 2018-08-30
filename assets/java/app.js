const buttonChoices = ["Futurama", "Friends", "Rick and Morty", "Parks and Rec", "Breaking Bad", "Bob's Burgers", "Seinfeld", "South Park", "The Office", "American Dad", "Family Guy", "How I Met Your Mother", "Frasier"]


let searchTerm = '';
let URL = '';
let outputAni = [];
let outputStill = [];

//Creates buttons on the DOM
function pushButtons() {
    $("#buttons").empty();
    for (let i = 0; i < buttonChoices.length; i++) {
        $("#buttons").append(`<button type="button" class="btn" onClick="buttonClicked(this.id)" id="${buttonChoices[i]}">${buttonChoices[i]}</button>`);
    };
};

//When gif image is clicked, checks to see if the class is "still" or not then replaces with appropriate URL
function giphyClicked(giphy_id) {
    let j = giphy_id;
    if ($("#"+j+"").is(".still") === true) {
        $("#"+j+"").replaceWith(outputAni[j]);
    }else {
        $("#"+j+"").replaceWith(outputStill[j]);
    }
};

//add button through the input box when users pushes submit
$("#submit").on("click", function(){
    buttonChoices.push($(".add").val());
    pushButtons(buttonChoices);
})

//when button is clicked calls the giphy API and searches by the value of the button, pushes to the DOM
function buttonClicked(button_id) {
    searchTerm = button_id.replace(' ', '+');
    URL = "https://api.giphy.com/v1/gifs/search?api_key=LLHzPvE7ufGbvRc80wsluvMS4Ub9hVwu&q=" + searchTerm + "&limit=10&offset=0&lang=en";
    $.ajax({
        url: URL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
        outputAni = [];
        outputStill = [];
        for (let i = 0; i < response.data.length; i++) {
            outputStill.push(`<figure>
                            <img class="still" onClick="giphyClicked(this.id)" id="${i}" src="${response.data[i].images.downsized_still.url}">
                                <figcaption>Rating: ${response.data[i].rating}</figcaption>
                            </figure>`);
            outputAni.push(`<img class="gif" onClick="giphyClicked(this.id)" id="${i}" src="${response.data[i].images.downsized.url}">`);
        };
        $("#gifZone").html(outputStill.join(''));    
});
}

pushButtons(buttonChoices);