let gifContainer = document.getElementsByClassName("gif__container");
let btnVerMas = document.getElementsByClassName("btn-vermas");
let btnBuscar = document.getElementById("boton-buscar");
function sendApiRequest(){
    let userInput = document.getElementById("search").value;
    let giphyApiKey = "hzYdEX7ReJLdcWLooF6Nem6k9IP4jk2n";
    let giphyApiURL = `https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=g&api_key=${giphyApiKey}`;

    fetch(giphyApiURL).then(function(data){
        return data.json()
    })
    .then(function(json){        
        for (let i = 0; i < 12; i++) {
            let random = parseInt(Math.random() * 50);
            let imgPath = json.data[random].images.fixed_height.url;
            let img = document.createElement("img");            
            img.setAttribute("src", imgPath);    
            gifContainer[0].insertAdjacentElement('beforeend', img);
        }
        btnVerMas[0].style.display = "block"
    });
    
}

btnBuscar.addEventListener('click', () => {    
    sendApiRequest();
});
btnVerMas[0].addEventListener('click', () => {
    sendApiRequest();
});
    

