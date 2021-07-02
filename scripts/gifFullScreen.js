let icons_full_screen = document.getElementsByClassName('icons_full_screen');
let fullScreen_Parent = document.getElementsByClassName("full_screen");
let full_screen = document.getElementsByClassName('fullscreen');
let img_fullscreen = document.getElementById("imgFullScreen");
let container = document.getElementsByClassName("container");
let btn_cerrar_fs = document.getElementById("btn-borrar-busqueda-fs");
let main = document.getElementsByTagName("main");
let header = document.getElementsByTagName("header");
let btn_favoritos_fs = document.getElementsByClassName("icon-fav-fs");
let btn_descarga_fs = document.getElementsByClassName("icon_descarga-fs");
let imgFS;



function cerrarFs(){
    imgFS = document.getElementById("imgFullScreen");
    full_screen[0].removeChild(imgFS);
    fullScreen_Parent[0].style.display='none';
    main[0].style.opacity ="1";
    header[0].style.opacity ="1";
}

btn_cerrar_fs.addEventListener('click', cerrarFs)

function favorito_fs(evt){
    console.log(evt.target);
}
// btn_favoritos_fs.addEventListener('click', favorito_fs)
function FullScreen(){
    try {        
        fullScreen_Parent[0].style.display='block';
        imgFS = document.getElementById("imgFullScreen");
        if(classBoton === "fas fa-expand-alt icon_fullScreen"){
            if (imgFS) {
                full_screen.removeChild(img_fullscreen)
                // removeAllChild(full_screen[0])
            }
            
            urlGifo = contenidoImagenes[index].src;
            imgFullScreen = document.createElement("img");
            imgFullScreen.id = "imgFullScreen";
            imgFullScreen.setAttribute("src", urlGifo)


            // let divIcons = document.createElement('span');
            // divIcons.classList.add('icons_full_screen');
            // let iconFavoritos = document.createElement('a');
            // iconFavoritos.classList.add('fas','fa-heart', 'icon-fav-fs');
            // iconFavoritos.id=index;
            // let iconDescarga = document.createElement('a');
            // iconDescarga.classList.add('fas','fa-download', 'icon_descarga-fs');

            full_screen[0].insertAdjacentElement('afterbegin' , imgFullScreen)

            // full_screen[0].insertAdjacentElement('beforeend', divIcons)
            
            // divIcons.insertAdjacentElement('beforeend', iconFavoritos)
            
            // divIcons.insertAdjacentElement('beforeend', iconDescarga)
            main[0].style.opacity ="0.4";
            header[0].style.opacity ="0.4";   
        }
        
    } catch (error) {
        console.log(error);
    }

}


btn_favoritos_fs[0].addEventListener('click',guardaGif_LocalStorage)
btn_descarga_fs[0].addEventListener('click', descargaGif)