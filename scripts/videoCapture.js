const video = document.getElementById("video");
const btn_comenzar = document.getElementById("btn-comenzar");
const btn_grabar = document.getElementById('btn-grabar');
stream = {audio: false, video: {width: 1280, height: 720}};
let giphyApiKey = "hzYdEX7ReJLdcWLooF6Nem6k9IP4jk2n";

function startup(){
    navigator.mediaDevices.getUserMedia(stream)
    .then(function(stream){
        var video = document.getElementById('video');
        video.srcObject = stream;
        video.onloadedmetadata = async function(e){
            video.play();
            console.log('iniciada');
        };
    })
    .catch(function(err){
        console.log(err.name + ": " + err.message);
    });
};

function grabarGif(){
    navigator.mediaDevices.getUserMedia(stream)
    .then(function(stream){
        const video = document.getElementById('video');
        video.srcObject = stream;
        video.onloadedmetadata = async function(e){
            video.play();
            recorder = RecordRTC(stream, {
                type: 'gif',
                frameRate: 1,
                quality: 10,
                width: 360,
                hidden: 240,
                onGifRecordingStarted: function(){
                    console.log('started')
                },
            });
            recorder.startRecording();
        };
    })
    .catch(function(err){
        console.log(err.name + ": " + err.message);
    });
}


async function guardaGifo(blob){    
    let formData = new FormData();
    const usuarioGiphy = "yeffersonvargasm";
    formData.append('api_key', giphyApiKey);
    formData.append('username', usuarioGiphy);
    formData.append('file', blob, 'myGif.gif');
    formData.append('tags', 'mygifo');
    const cargaGifo = `https://upload.giphy.com/v1/gifs`;
    const responseCargaGifo = await fetch(encodeURI(cargaGifo),{
        method: 'POST',
        body: formData
    })
    .then(res => res.json())
    .catch(error => console.error("error: ", error))
    .then(response => console.log("Success", response));
}

btn_comenzar.onclick = async () =>{
    if (btn_comenzar.textContent === "COMENZAR") {
        startup();
        btn_comenzar.textContent = "GRABAR";
    }
    else if (btn_comenzar.textContent == "GRABAR") {
        grabarGif();
        btn_comenzar.textContent = "FINALIZAR";
    }
    else if (btn_comenzar.textContent == "FINALIZAR") {
        await recorder.stopRecording();
        alert("grabación terminada");
        btn_comenzar.textContent = "SUBIR GIFO";
        
    }
    else{        
        let blob = await recorder.getBlob();
        guardaGifo(blob);
        btn_comenzar.textContent = "COMENZAR";
        
    }
}
