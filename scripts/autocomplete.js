let listAutocomplete = document.getElementById("autocomplete-lista-palabras");
let search = document.getElementById("search");
let autcompleteBar = document.getElementsByClassName("autocomplete");


function removeAllChild(parent){
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function sendApiRequestTags(){
    let txtSearch = search.value;
    let giphyApiKey = "hzYdEX7ReJLdcWLooF6Nem6k9IP4jk2n";
    let giphyApiURL = `https://api.giphy.com/v1/gifs/search/tags?q=${txtSearch}&api_key=${giphyApiKey}`;
    fetch(giphyApiURL).then(function(data){
        return data.json()
    })
    .then(function(json){   
        // console.log(json.data[0]);
        removeAllChild(listAutocomplete);
        if (json.data[0] !== undefined) {
            for (let i = 0; i < 5; i++) {
                let term = json.data[i].name;
                let list = document.createElement("li");            
                list.classList.add("list_autocomplete");
                list.innerHTML = term;
                listAutocomplete.insertAdjacentElement('beforeend', list);
            }
        }

    });
}

let btnBuscar2 = document.getElementById("boton-buscar");
let container_autocomplete = document.getElementsByClassName("autocomplete");

search.addEventListener('keyup', ()=>{    
    if (search.value!=="") {
        sendApiRequestTags();
        container_autocomplete[0].style.display ="block";

        let listaHijos = document.querySelectorAll("ul.autocomplete-lista-palabras > li");

        for (lista of listaHijos) {
            lista.addEventListener("click", function(evt){
                let list = evt.target;
                console.log("click en" +list);
            })    
        }
    }else{
        autcompleteBar[0].style.display="none";
    }


})

