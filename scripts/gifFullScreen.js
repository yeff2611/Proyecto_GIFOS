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
    if (imgFS) {
        imgFS = document.getElementById("imgFullScreen");
        full_screen[0].removeChild(imgFS);
    }    
    fullScreen_Parent[0].style.display='none';
    main[0].style.opacity ="1";
    header[0].style.opacity ="1";
}

function FullScreen(){
    try {        
        fullScreen_Parent[0].style.display='block';
        imgFS = document.getElementById("imgFullScreen");
        if(classBoton === "fas fa-expand-alt icon_fullScreen"){
            if (imgFS) {
                full_screen.removeChild(img_fullscreen)
            }
            
            urlGifo = contenidoImagenes[index].src;
            imgFullScreen = document.createElement("img");
            imgFullScreen.id = "imgFullScreen";
            imgFullScreen.setAttribute("src", urlGifo)

            full_screen[0].insertAdjacentElement('afterbegin' , imgFullScreen)

            main[0].style.opacity ="0.4";
            header[0].style.opacity ="0.4";   
        }
        
    } catch (error) {
        console.log(error);
    }
}
btn_cerrar_fs.addEventListener('click', cerrarFs)
btn_favoritos_fs[0].addEventListener('click',guardaGif_LocalStorage)
btn_descarga_fs[0].addEventListener('click', descargaGif)