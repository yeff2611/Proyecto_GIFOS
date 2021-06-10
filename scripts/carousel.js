let gifContainerCarousel = document.getElementById("carousel");
let btnFlecha = document.getElementsByClassName("btn-flecha")

function sendApiRequestTrending(){    
    let giphyApiKey = "hzYdEX7ReJLdcWLooF6Nem6k9IP4jk2n";
    let giphyApiURL = `https://api.giphy.com/v1/gifs/trending?api_key=${giphyApiKey}`;
    fetch(giphyApiURL).then(function(data){
        return data.json()
    })
    .then(function(json){        
        for (let i = 0; i < 24; i++) {
            // let random = parseInt(Math.random() * 50);
            let imgPath = json.data[i].images.fixed_height.url;
            let divImg = document.createElement("div");
            divImg.classList.add('cont__img');
            divImg.id = "cont__img";
            let img = document.createElement("img");  
            img.classList.add("img_carousel");
            img.setAttribute("src", imgPath);
            img.id=i;

            let divIcons = document.createElement('span');
            divIcons.classList.add('icons_carousel-hover');
            let iconFavoritos = document.createElement('a');
            iconFavoritos.classList.add('fas','fa-heart', 'icon-fav');
            let iconDescarga = document.createElement('a');
            iconDescarga.classList.add('fas','fa-download', 'icon_descarga');
            iconDescarga.id=i;//"icon_descarga";
            iconFavoritos.id=i;
            let iconExpand = document.createElement('a');
            iconExpand.classList.add('fas','fa-expand-alt');

            
            gifContainerCarousel.insertAdjacentElement('beforeend', divImg);
            divImg.insertAdjacentElement('beforeend', img);
            divImg.insertAdjacentElement('beforeend', divIcons);
            divIcons.insertAdjacentElement('beforeend',iconFavoritos);
            divIcons.insertAdjacentElement('beforeend', iconDescarga);
            divIcons.insertAdjacentElement('beforeend',iconExpand);
            // console.log(json)
        }
         btn_descarga = document.querySelector(".icon_descarga");
        // btn_descarga.addEventListener("click", ()=>{    
        //     let padre =  btn_descarga.parentNode;
        //     let padreppal =  padre.parentNode;
        //     let primerHijo =  padreppal.firstChild;
        //     console.log(primerHijo.src)
        // })
        contenido_carousel.addEventListener("click", capturaObjetosClick);
        // contenido_carousel.addEventListener("click", descargaGif);
    });
}
sendApiRequestTrending();

const contenedor_carousel_scroll = document.querySelector('.contenedor-carousel');

const flechaDerecha = document.getElementById('flecha-derecha');
flechaDerecha.addEventListener('click', () =>{
    contenedor_carousel_scroll.scrollLeft += contenedor_carousel_scroll.offsetWidth;
})

const flechaIzquierda = document.getElementById('flecha-izquierda');
flechaIzquierda.addEventListener('click', () =>{
    contenedor_carousel_scroll.scrollLeft -= contenedor_carousel_scroll.offsetWidth;
})

