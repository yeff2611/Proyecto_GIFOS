let vector_gifos = [];

class Gifo{
    constructor(srcGifo){
        this.srcGifo = srcGifo;
    }
    createFavGifo(){
        const gif_item_container = document.createElement("div");
        gif_item_container.classList.add("gif-container-item");
    
        const imgGif = document.createElement("img");
        imgGif.src = this.srcGifo;
        imgGif.setAttribute("alt", "Gifo Favoritos");
        gif_item_container.append(imgGif);
    }    
}
function creaGifo(url_gif){
    const gifo = new Gifo(urlGifo);
    return gifo;
}
//Valida si el localStorage tiene información
function checkLocalStorage(){
    vect_gifos = localStorage.getItem('gifos');
    if (vect_gifos === null) {
        vector_gifos = [];
    }else{
        vector_gifos = JSON.parse(vect_gifos);
    }
    return vector_gifos;
}
//Guarda gif en localStorage
function guardaGif_LocalStorage(){        
    try {
        checkLocalStorage();
        if(classBoton === "fas fa-heart icon-fav"){
            urlGifo=contenidoImagenes[index].src;
            console.log(urlGifo);
            const gif = creaGifo(urlGifo);
            vector_gifos.push(gif);
            localStorage.setItem("gifos", JSON.stringify(vector_gifos));  
        }
    } catch (error) {
        console.log(error)
    }
}   


