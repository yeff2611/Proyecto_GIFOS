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
