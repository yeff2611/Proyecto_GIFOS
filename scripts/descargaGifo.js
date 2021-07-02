let contenidoImagenes = document.getElementsByClassName("img_carousel");
let contenido_carousel = document.getElementById("carousel");
let btn_descarga
let urlGifo; 

function descargaGif(){
    try {
        (async () =>{
            let a = document.createElement('a');           
            let response = await fetch(urlGifo);
            let file = await response.blob();
            a.download = "miGif";
            a.href = window.URL.createObjectURL(file);
            a.dataset.downloadurl = ['application/octet-stream', a.download, a.href].join(':')
            a.click();
        })();   
    } catch (error) {
        console.log(error)
    }
}

//captura los objetos al clickearlos
let haHechoClick;
let classBoton;
let index;
function capturaObjetosClick(e){    
    try {
        haHechoClick = e.target
        index = haHechoClick.getAttribute("id");
        classBoton = haHechoClick.getAttribute("class");
        if (classBoton === "fas fa-download icon_descarga") {
            urlGifo=contenidoImagenes[index].src;
            descargaGif()
        }
        /*Guarda gif en favoritos*/
        else if(classBoton === "fas fa-heart icon-fav"){
            guardaGif_LocalStorage();
        }
        else if(classBoton === "fas fa-expand-alt icon_fullScreen"){
            FullScreen();
        }
    } catch (error) {
        console.log(error)
    }
}   
