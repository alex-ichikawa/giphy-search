const buttonChoices = ["Dog", "Cat", "Mouse", "Formula 1", "Ferrari F1", "Red Bull F1", "Aryton Senna", "Michael Schumacher", "Kimi Raikkonen", "Fernando Alonso", "Jenson Button", "Mark Webber"]


let searchTerm = '';
let URL = '';


function pushButtons() {
    for (let i = 0; i < buttonChoices.length; i++) {
        $("#buttons").append(`<button type="button" class="clicked" onClick="buttonClicked(this.id)" id="${buttonChoices[i]}">${buttonChoices[i]}</button>`);

    };

};

function giphyClicked(giphy_id) {
    let j = giphy_id;
      $(`"#${j}"`).html(outputAni[j]);//`<img id="${j}" onClick="giphyClicked(this.id)" src="${outputAni[j].data.images.downsized_small.url}"></img>`)
 };

function buttonClicked(button_id) {
    searchTerm = button_id.replace(' ', '+');
    URL = "https://api.giphy.com/v1/gifs/search?api_key=LLHzPvE7ufGbvRc80wsluvMS4Ub9hVwu&q=" + searchTerm + "&limit=10&offset=0&rating=Y&lang=en";
    let outputStill = [];
    let outputAni = [];
    $.ajax({
        url: URL,
        method: "GET"
    }).then(function(response) {
        console.log(response.data);
        for (let i = 0; i < response.data.length; i++) {
            outputStill.push(`<img onClick="giphyClicked(this.id)" id="${i}" src="${response.data[i].images.downsized_still.url}"></img>`);
            outputAni.push(`<img onClick="giphyClicked(this.id)" id="${i}" src="${response.data[i].images.downsized_small.url}"></img>`);
        };
        $("#content").html(outputStill.join(''));
        
    // }).then(function giphyClicked(giphy_id) {
    //     let j = giphy_id;
    //       $(`"#${j}"`).html(outputAni[j]);//`<img id="${j}" onClick="giphyClicked(this.id)" src="${outputAni[j].data.images.downsized_small.url}"></img>`)
    //  });
    
});
}

pushButtons(buttonChoices);