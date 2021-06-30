let click;
let listAutocomplete = document.getElementById("autocomplete-lista-palabras");
let search = document.getElementById("search");
let resultadoSearch = document.getElementsByClassName("gif__container");
let btnBuscar2 = document.getElementById("boton-buscar");
let container_autocomplete = document.getElementsByClassName("autocomplete");

function sendApiRequestTags(){
    let txtSearch = search.value;
    let giphyApiKey = "hzYdEX7ReJLdcWLooF6Nem6k9IP4jk2n";
    let giphyApiURL = `https://api.giphy.com/v1/gifs/search/tags?q=${txtSearch}&api_key=${giphyApiKey}`;
    fetch(giphyApiURL).then(function(data){
        return data.json()
    })
    .then(function(json){   
        removeAllChild(listAutocomplete);
        if (json.data[0] !== undefined) {
            for (let i = 0; i < 5; i++) {
                let term = json.data[i].name;
                let list = document.createElement("li");            
                list.classList.add("list_autocomplete");
                list.id=i;
                list.innerHTML = term;
                listAutocomplete.insertAdjacentElement('beforeend', list);
            }
        }
    });
}

search.addEventListener('keyup', ()=>{    
    if (search.value!=="") {
        sendApiRequestTags();
        container_autocomplete[0].style.display ="block";  
        btnBuscar.style.display = "none";
        btn_borra_busqueda.style.display = "block";
        let li = document.getElementById("list_autocomplete")
        li.addEventListener("click", ()=>{
            console.log(li.value)
        })      

    }else{
        container_autocomplete[0].style.display="none";
    }
})

function capturaPalabra(evt){
    click = evt.target;
    console.log(click.innerText);
    search.value = click.innerText;
    removeAllChild(resultadoSearch[0]);
    sendApiRequest();
    container_autocomplete[0].style.display="none";
    btnBuscar.style.display = "none";
    btn_borra_busqueda.style.display = "block";
}

listAutocomplete.addEventListener("click", capturaPalabra)