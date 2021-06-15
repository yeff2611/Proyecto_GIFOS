let gifContainer = document.getElementsByClassName("gif__container");
let btnVerMas = document.getElementsByClassName("btn-vermas");
let btnBuscar = document.getElementById("boton-buscar");
let container_sin_resultados = document.getElementsByClassName("sin_resultados_container");
let btn_borra_busqueda = document.getElementById("btn-borrar-busqueda");

function limpiaBusqueda(){
    removeAllChild(resultadoSearch[0]);
    btnVerMas[0].style.display = "none";
    removeAllChild(container_sin_resultados[0]);
}

function sendApiRequest(){
    let userInput = document.getElementById("search").value;
    let giphyApiKey = "hzYdEX7ReJLdcWLooF6Nem6k9IP4jk2n";
    let giphyApiURL = `https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=g&api_key=${giphyApiKey}`;

    fetch(giphyApiURL).then(function(data){
        return data.json()
    })
    .then(function(json){        
        console.log(json);
        if (json.data.length === 0) {
            limpiaBusqueda();
            let imgPathSinResultado = "./assets/icon-busqueda-sin-resultado.svg"
            let img_sin_resultado = document.createElement("img");
            img_sin_resultado.setAttribute("src",imgPathSinResultado)
            let alerta = document.createElement("p");
            alerta.classList.add("sin_resultados");
            alerta.innerText = "Intenta con otra búsqueda";
            container_sin_resultados[0].insertAdjacentElement("beforeend", img_sin_resultado);
            container_sin_resultados[0].insertAdjacentElement("beforeend", alerta);
        }else{
            limpiaBusqueda()
            for (let i = 0; i < 12; i++) {                
                let random = parseInt(Math.random() * 50);
                let imgPath = json.data[random].images.fixed_height.url;
                let img = document.createElement("img");            
                img.setAttribute("src", imgPath);    
                gifContainer[0].insertAdjacentElement('beforeend', img);
            }
            btnVerMas[0].style.display = "block";

        }
        
    });
    
}

btnBuscar.addEventListener('click', () => {
    limpiaBusqueda();
    sendApiRequest();
    container_autocomplete[0].style.display="none";
    btnBuscar.style.display = "none";
    btn_borra_busqueda.style.display = "block";
});
btnVerMas[0].addEventListener('click', () => {
    sendApiRequest();
});

btn_borra_busqueda.addEventListener("click", ()=>{
    limpiaBusqueda();
    search.value="";
    btnBuscar.style.display = "block";
    btn_borra_busqueda.style.display = "none";
})

