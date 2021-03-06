const btnFavoritos = document.getElementById("nav_favoritos");
const btnMisGifos = document.getElementById("nav_misGifos");
let favoritos = document.querySelector('#favoritos');
const elementBuscador = document.getElementsByClassName('buscador');
const seccionGifosContainer = document.getElementById("misGifos");
let listaGifs = document.getElementById('listaGifos');
let Logo = document.getElementById("nav__logo");
let carousel = document.getElementsByClassName("carousel");
let seccion_crea_gifos = document.getElementsByClassName("creagifos");
let btn_Hamburguesa = document.getElementById("btn-hamburguer");
let NavLista = document.getElementsByClassName("nav__lista");


/*********************************************** */
/**Función eliminar todos los hijos del padre */
/*********************************************** */
function removeAllChild(parent){
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
const seccionIndex = () =>{
    removeAllChild(listaGifs);
    removeAllChild(favoritos);
    removeAllChild(seccionGifosContainer);
    removeAllChild(lista_Mis_Gifos);
    limpiaBusqueda();
    search.value="";    
    btnBuscar.style.display = "block";    
    btn_borra_busqueda.style.display = "none";
    elementBuscador[0].style.display = 'block'
    carousel[0].style.display = "block";
    seccion_crea_gifos[0].style.display = "none";
}

Logo.addEventListener('click', seccionIndex);

/***************************** */
/********Sección favoritos******/
/***************************** */
const seccionFavoritos = ()=>{
    // removeAllChild(elementBuscador[0]);
    elementBuscador[0].style.display = 'none'
    carousel[0].style.display = "block";
    seccion_crea_gifos[0].style.display = "none";
    removeAllChild(seccionGifosContainer);
    removeAllChild(lista_Mis_Gifos);
    if (localStorage.getItem('gifos') === null) {
        listaGifs.innerHTML = '';
        if (!document.querySelector(".icon_favoritos")) {
            let sourceSinFavoritos="./assets/icon-favoritos.svg";
            let classImg = "icon_favoritos";
            let sourceSinGif = "./assets/icon-fav-sin-contenido.svg";
            let classImgSinGif = "icon_fav_sin_contenido";
            let idDescripFav = "descripcionFavoritos";
            favoritos.innerHTML +=`
            <!-- logo favoritos -->
            <img src=${sourceSinFavoritos} class=${classImg} alt="logo sin favoritos">
            <h1 class="titulo__favoritos">Favoritos</h1>
            <!-- logo sin favoritos -->
            <img src=${sourceSinGif} alt="icono favoritos sin contenido" class=${classImgSinGif}>
            <p id=${idDescripFav}>
                "¡Guarda tu primer GIFO en Favoritos 
                para que se muestre aquí!"
            </p>
            `
        }
    }
    else{
        removeAllChild(favoritos);
        vector_gifos =JSON.parse(localStorage.getItem('gifos'));        
        listaGifs.innerHTML = '';
        vector_gifos.forEach(gif => {
            listaGifs.innerHTML += `<img src=${gif.srcGifo}></img>`        
        })
    }
}

btnFavoritos.addEventListener('click',()=>{
    seccionFavoritos();
});

/***************************** */
/********Sección mis gifos******/
/***************************** */

const seccionMiGifos = ()=>{
    listaGifs.innerHTML = '';
    elementBuscador[0].style.display = 'none';
    carousel[0].style.display = "block";
    seccion_crea_gifos[0].style.display = "none";
    removeAllChild(favoritos);
    checkLocalStorageMisGifos();    
    if (localStorage.getItem("Mis_Gifos") === null) {
        if (!document.querySelector(".icon_gifos")) {         
            let srcLogoMisGifos = "./assets/icon-mis-gifos.svg";
            let logoMisGifos = document.createElement("img");
            logoMisGifos.classList.add("icon_gifos");
            logoMisGifos.src = srcLogoMisGifos;
            let tituloMisGifos = document.createElement("h1");
            tituloMisGifos.classList.add("titulo__gifos");
            tituloMisGifos.innerHTML = "Mis GIFOS";
            
            let srcLogoSinGifos = "./assets/icon-mis-gifos-sin-contenido.svg";
            let logoSinGifos = document.createElement("img");
            logoSinGifos.classList.add("icon_gif_sin_contenido");
            logoSinGifos.src = srcLogoSinGifos;
            let descripcionMisGifos = document.createElement("p");
            descripcionMisGifos.id = "descripcionGifos";
            descripcionMisGifos.innerHTML = "¡Anímate a crear tu primer GIFO!"
    
            seccionGifosContainer.append(logoMisGifos, tituloMisGifos, logoSinGifos, descripcionMisGifos);
        }
    }else{
        CargarMisGifos();
    }

}

btnMisGifos.addEventListener('click', seccionMiGifos);

/***************************** */
/********Sección crea gifos******/
/***************************** */
let btn_crea_gifos = document.getElementById("nav__cta");
const creaGifos = ()=>{
    search.value="";
    removeAllChild(listaGifs);
    removeAllChild(seccionGifosContainer);
    removeAllChild(favoritos);
    removeAllChild(lista_Mis_Gifos);
    btnBuscar.style.display = "none";    
    btn_borra_busqueda.style.display = "none";
    elementBuscador[0].style.display = 'none';
    carousel[0].style.display = "none";
    seccion_crea_gifos[0].style.display = "block";
}

btn_crea_gifos.addEventListener("click", creaGifos);

btn_Hamburguesa.addEventListener("click", ()=>{
    NavLista[0].classList.toggle("animation");
})