let contenidoImagenes = document.getElementsByClassName("img_carousel");
let contenido_carousel = document.getElementById("carousel");
let urlGifo;

//captura los objetos al clickearlos
function capturaObjetosClick(e){
    let haHechoClick;
    try {
        haHechoClick = e.target
        let index =haHechoClick.getAttribute("id");
        urlGifo=contenidoImagenes[index].src;
    } catch (error) {
        console.log(error)
    }
}    

contenido_carousel.addEventListener("click", capturaObjetosClick);

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
contenido_carousel.addEventListener("click", descargaGif);

// document.body.addEventListener("click",capturaObjetosClick);
// let linkGif = (document.onclick = capturaObjetosClick)
// async () =>{
    
// }
