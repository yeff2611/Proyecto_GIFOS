let icons_full_screen = document.getElementsByClassName('icons_full_screen');
let fullScreen_Parent = document.getElementsByClassName("full_screen");
let full_screen = document.getElementsByClassName('fullscreen');
let container = document.getElementsByClassName("container");
let btn_cerrar_fs = document.getElementById("btn-borrar-busqueda-fs");
let main = document.getElementsByTagName("main");
let header = document.getElementsByTagName("header");

function cerrarFs(){
    removeAllChild(full_screen[0])
    fullScreen_Parent[0].style.display='none';
    main[0].style.opacity ="1";
    header[0].style.opacity ="1";
}
btn_cerrar_fs.addEventListener('click', cerrarFs)

function FullScreen(){
    try {
        fullScreen_Parent[0].style.display='block';
        let imgFS = document.getElementById("imgFullScreen");
        if(classBoton === "fas fa-expand-alt icon_fullScreen"){
            if (imgFS) {
                removeAllChild(full_screen[0])
            }
            
            urlGifo = contenidoImagenes[index].src;
            imgFullScreen = document.createElement("img");
            imgFullScreen.id = "imgFullScreen";
            imgFullScreen.setAttribute("src", urlGifo)

            // alert(urlGifo);
            // sendApiRequestTrending();
            let divIcons = document.createElement('span');
            divIcons.classList.add('icons_full_screen');
            let iconFavoritos = document.createElement('a');
            iconFavoritos.classList.add('fas','fa-heart', 'icon-fav');
            let iconDescarga = document.createElement('a');
            iconDescarga.classList.add('fas','fa-download', 'icon_descarga');
            full_screen[0].insertAdjacentElement('beforeend', imgFullScreen)
            full_screen[0].insertAdjacentElement('beforeend', divIcons)
            
            divIcons.insertAdjacentElement('beforeend', iconFavoritos)
            
            divIcons.insertAdjacentElement('beforeend', iconDescarga)
            main[0].style.opacity ="0.4";
            header[0].style.opacity ="0.4";
        }
        
    } catch (error) {
        console.log(error);
    }

}

