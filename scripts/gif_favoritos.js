let vector_gifos = [];

class Gifo{
    constructor(srcGifo){
        this.srcGifo = srcGifo;
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
            urlGifo = contenidoImagenes[index].src;            
            const gif = creaGifo(urlGifo);
            vector_gifos.push(gif);
            localStorage.setItem("gifos", JSON.stringify(vector_gifos));  
        }
    } catch (error) {
        console.log(error)
    }
}   