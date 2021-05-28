//captura los objetos al clickearlos
function capturaObjetosClick(e){
    let haHechoClick;
    try {
        haHechoClick = e.target
        let index = haHechoClick.getAttribute("id");
        let classBoton = haHechoClick.getAttribute("class");
        if (classBoton === "fas fa-download icon_descarga") {
            let padre =  btn_descarga.parentNode;
            urlGifo=contenidoImagenes[index].src;
            descargaGif()
        }
    } catch (error) {
        console.log(error)
    }
}   