// function valida(){
//     btn = document.querySelector("#icon_descarga");
//     const descarga = (desc)=>{
//         if (document.querySelector("#icon_descarga")) {
//             console.log("existe");
//         }
//     }
// }
// valida()

let conimg = document.getElementsByClassName("img_carousel");

//captura los objetos al clickeados
function capturaObjetosClick(e){
    let haHechoClick;
    try {
        haHechoClick = e.target
        let index =haHechoClick.getAttribute("id");
        // console.log(haHechoClick);
        // console.log(conimg[index])
        // console.log(conimg[index].src);
        urlGifo=conimg[index].src;
        // let linkGifo = conimg[index].src;
        // let response = await fetch(linkGifo)
        // let file = await response.blob();
        // linkGifo.download = "miGif";
    } catch (error) {
        console.log(error)
    }
}    

// document.body.addEventListener("click",capturaObjetosClick);
// let linkGif = (document.onclick = capturaObjetosClick)
// async () =>{
    
// }
