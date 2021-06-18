lista_Mis_Gifos = document.getElementById("listaMisGifos");

async function CargarMisGifos(){
    giphyApiKey = "hzYdEX7ReJLdcWLooF6Nem6k9IP4jk2n";
    vector_misGifos = JSON.parse(localStorage.getItem('Mis_Gifos'));
    lista_Mis_Gifos.innerHTML='';
    vector_misGifos.forEach(idGif => {
        console.log(idGif);
        let id = idGif;
        urlApi = `https://api.giphy.com/v1/gifs/${id}?api_key=${giphyApiKey}`;
        fetch(urlApi).then(function(data){
            return data.json();
        })
        .then(function(json){           
            urlMyGif = json.data.images.fixed_height.url;
            lista_Mis_Gifos.innerHTML += `<img src=${urlMyGif}></img>` 
        })

    })
}
