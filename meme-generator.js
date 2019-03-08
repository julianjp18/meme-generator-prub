let topTextInput, bottomTextInput, topTextSizeInput, bottomTextSizeInput, imageInput, generateBtn, canvas, ctx;

function GenerarMeme(){
    canvas = document.getElementById('meme-canvas');
    textArriba=document.getElementById('top-text').value;
    textAbajo=document.getElementById('bottom-text').value;
    var ContextoCanvas = canvas.getContext("2d");
    var ObjetoImagen = new Image();
        ObjetoImagen.onload = function(){
        // set size proportional to image
        canvas.height = canvas.width * (ObjetoImagen.height / ObjetoImagen.width);

        // step 1 - resize to 50%
        
        canvas.width = ObjetoImagen.width * 0.5;
        canvas.height = ObjetoImagen.height * 0.5;
        ctx.drawImage(ObjetoImagen, 0, 0, canvas.width, canvas.height);

        // step 2
        ctx.drawImage(canvas, 0, 0, canvas.width * 0.5, canvas.height * 0.5);

        // step 3, resize to final size
        ObjetoImagen.crossOrigin="anonymous";
        ctx.drawImage(canvas, 0, 0, canvas.width * 0.5, canvas.height * 0.5,
        0, 0, canvas.width, canvas.height);
        
        // Datos texto Meme (font)
        ctx.lineWidth  = 5;
        ctx.font = '30px Impact';
        ctx.strokeStyle = 'black';
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.lineJoin = 'round';

        textAbajo = textAbajo.toUpperCase(); 
        x = canvas.width/2;
        y = canvas.height - canvas.height/7.4;

        // Top text font size
        fontSize = canvas.width * topTextSizeInput.value;
        ctx.font = fontSize + 'px Impact';
        ctx.lineWidth = fontSize / 20;

        // Draw top text
        ctx.textBaseline = 'top';
        textArriba.split('\n').forEach(function (t, i) {
            ctx.fillText(t, canvas.width / 2, i * fontSize, canvas.width);
            ctx.strokeText(t, canvas.width / 2, i * fontSize, canvas.width);
        });

        // Bottom text font size
        fontSize = canvas.width * bottomTextSizeInput.value;
        ctx.font = fontSize + 'px Impact';
        ctx.lineWidth = fontSize / 20;

        // Draw bottom text
        ctx.textBaseline = 'bottom';
        textAbajo.split('\n').reverse().forEach(function (t, i) { // .reverse() because it's drawing the bottom text from the bottom up
            ctx.fillText(t, canvas.width / 2, canvas.height - i * fontSize, canvas.width);
            ctx.strokeText(t, canvas.width / 2, canvas.height - i * fontSize, canvas.width);
        });
};
ObjetoImagen.src = document.getElementById("image").src; 
};

function cambiarTamanoFuente(){
    let fontSize;
    var ObjetoImagen = new Image();
        ObjetoImagen.onload = function(){
            textArriba=document.getElementById('top-text').value;
            textAbajo=document.getElementById('bottom-text').value;
            canvas = document.getElementById('meme-canvas');
            topTextSizeInput = document.getElementById('top-text-size-input');
            bottomTextSizeInput = document.getElementById('bottom-text-size-input');
            var ctx = canvas.getContext("2d");
        
            // Clear canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            // set size proportional to image
            canvas.height = canvas.width * (ObjetoImagen.height / ObjetoImagen.width);

            // step 1 - resize to 50%
            
            canvas.width = ObjetoImagen.width * 0.5;
            canvas.height = ObjetoImagen.height * 0.5;
            ctx.drawImage(ObjetoImagen, 0, 0, canvas.width, canvas.height);

            // step 2
            ctx.drawImage(canvas, 0, 0, canvas.width * 0.5, canvas.height * 0.5);

            // step 3, resize to final size
            ObjetoImagen.crossOrigin="anonymous";
            ctx.drawImage(canvas, 0, 0, canvas.width * 0.5, canvas.height * 0.5,
            0, 0, canvas.width, canvas.height);
            // Datos texto Meme (font)
            ctx.lineWidth  = 5;
            ctx.font = '30px Impact';
            ctx.strokeStyle = 'black';
            ctx.fillStyle = 'white';
            ctx.textAlign = 'center';
            ctx.lineJoin = 'round';

            textAbajo = textAbajo.toUpperCase(); 
            x = canvas.width/2;
            y = canvas.height - canvas.height/7.4;

            // Top text font size
            fontSize = canvas.width * topTextSizeInput.value;
            ctx.font = fontSize + 'px Impact';
            ctx.lineWidth = fontSize / 20;

            // Draw top text
            ctx.textBaseline = 'top';
            textArriba.split('\n').forEach(function (t, i) {
                ctx.fillText(t, canvas.width / 2, i * fontSize, canvas.width);
                ctx.strokeText(t, canvas.width / 2, i * fontSize, canvas.width);
            });

            // Bottom text font size
            fontSize = canvas.width * bottomTextSizeInput.value;
            ctx.font = fontSize + 'px Impact';
            ctx.lineWidth = fontSize / 20;

            // Draw bottom text
            ctx.textBaseline = 'bottom';
            textAbajo.split('\n').reverse().forEach(function (t, i) { // .reverse() because it's drawing the bottom text from the bottom up
                ctx.fillText(t, canvas.width / 2, canvas.height - i * fontSize, canvas.width);
                ctx.strokeText(t, canvas.width / 2, canvas.height - i * fontSize, canvas.width);
            });
    }
    ObjetoImagen.src = document.getElementById("image").src; 
    
}

document.getElementById('image-input').addEventListener('change', function(event) {
    canvas = document.getElementById('meme-canvas');
    textArriba=document.getElementById('top-text').value;
    textAbajo=document.getElementById('bottom-text').value;
    var ctx = canvas.getContext('2d');
    var ObjetoImagen = new Image();
    ObjetoImagen.onload = function(){

        // set size proportional to image
        canvas.height = canvas.width * (ObjetoImagen.height / ObjetoImagen.width);

        // step 1 - resize to 50%
        
        canvas.width = ObjetoImagen.width * 0.5;
        canvas.height = ObjetoImagen.height * 0.5;
        ctx.drawImage(ObjetoImagen, 0, 0, canvas.width, canvas.height);

        // step 2
        ctx.drawImage(canvas, 0, 0, canvas.width * 0.5, canvas.height * 0.5);

        // step 3, resize to final size
        ObjetoImagen.crossOrigin="anonymous";
        ctx.drawImage(canvas, 0, 0, canvas.width * 0.5, canvas.height * 0.5,
        0, 0, canvas.width, canvas.height);
        /// Datos texto Meme (font)
        ctx.lineWidth  = 5;
        ctx.font = '30px Impact';
        ctx.strokeStyle = 'black';
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.lineJoin = 'round';

        textAbajo = textAbajo.toUpperCase(); 
        x = canvas.width/2;
        y = canvas.height - canvas.height/7.4;

        // Top text font size
        fontSize = canvas.width * topTextSizeInput.value;
        ctx.font = fontSize + 'px Impact';
        ctx.lineWidth = fontSize / 20;

        // Draw top text
        ctx.textBaseline = 'top';
        textArriba.split('\n').forEach(function (t, i) {
            ctx.fillText(t, canvas.width / 2, i * fontSize, canvas.width);
            ctx.strokeText(t, canvas.width / 2, i * fontSize, canvas.width);
        });

        // Bottom text font size
        fontSize = canvas.width * bottomTextSizeInput.value;
        ctx.font = fontSize + 'px Impact';
        ctx.lineWidth = fontSize / 20;

        // Draw bottom text
        ctx.textBaseline = 'bottom';
        textAbajo.split('\n').reverse().forEach(function (t, i) { // .reverse() because it's drawing the bottom text from the bottom up
            ctx.fillText(t, canvas.width / 2, canvas.height - i * fontSize, canvas.width);
            ctx.strokeText(t, canvas.width / 2, canvas.height - i * fontSize, canvas.width);
        });
    };
    ObjetoImagen.src = URL.createObjectURL(event.target.files[0]);
    document.getElementById('image').src = URL.createObjectURL(event.target.files[0]);
});
/** 
 * 
 document.getElementById("image-input").onchange = function () {
     canvas = document.getElementById('meme-canvas');
     image = document.getElementById('image-input');
     alert(image.src)
     var ctx=canvas.getContext("2d");
     var img=new Image();
     img.onload = function(){
         ctx.drawImage(img,0,0);
        };
        img.src=image.src;
    };

    
function generateMeme (img, topText, bottomText, topTextSize, bottomTextSize) {
    let fontSize;

    // Size canvas to image
    canvas.width = 500;
    canvas.height = 500;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Draw main image
    ctx.drawImage(img, 0, 0);

    // Text style: white with black borders
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'black';
    ctx.textAlign = 'center';

    // Top text font size
    fontSize = canvas.width * topTextSize;
    ctx.font = fontSize + 'px Impact';
    ctx.lineWidth = fontSize / 20;

    // Draw top text
    ctx.textBaseline = 'top';
    topText.split('\n').forEach(function (t, i) {
        ctx.fillText(t, canvas.width / 2, i * fontSize, canvas.width);
        ctx.strokeText(t, canvas.width / 2, i * fontSize, canvas.width);
    });

    // Bottom text font size
    fontSize = canvas.width * bottomTextSize;
    ctx.font = fontSize + 'px Impact';
    ctx.lineWidth = fontSize / 20;

    // Draw bottom text
    ctx.textBaseline = 'bottom';
    bottomText.split('\n').reverse().forEach(function (t, i) { // .reverse() because it's drawing the bottom text from the bottom up
        ctx.fillText(t, canvas.width / 2, canvas.height - i * fontSize, canvas.width);
        ctx.strokeText(t, canvas.width / 2, canvas.height - i * fontSize, canvas.width);
    });
}

*/

function download(e){
    var canvas = document.getElementById("meme-canvas");
    if (canvas.msToBlob){ //para internet explorer
        var blob = canvas.msToBlob();
        window.navigator.msSaveBlob(blob,"one.png" );// la extensión de preferencia pon jpg o png
    } else {
        link = document.getElementById("download");
        //Otros navegadores: Google chrome, Firefox etc...
        link.href = canvas.toDataURL("image/png");// Extensión .png ("image/png") --- Extension .jpg ("image/jpeg")
        link.download = filename;
    }
}

function init () {
    // Initialize variables
    topTextInput = document.getElementById('top-text');
    bottomTextInput = document.getElementById('bottom-text');
    topTextSizeInput = document.getElementById('top-text-size-input');
    bottomTextSizeInput = document.getElementById('bottom-text-size-input');
    imageInput = document.getElementById('image-input');
    generateBtn = document.getElementById('generate-btn');
    canvas = document.getElementById('meme-canvas');
    
    ctx = canvas.getContext('2d');

    canvas.width = canvas.height = 0;

    // Default/Demo text
    topTextInput.value = 'Arriba';
    bottomTextInput.value = 'Abajo';
    /*
    // Generate button click listener
    generateBtn.addEventListener('click', function () {
        // Read image as DataURL using the FileReader API
        let reader = new FileReader();
        reader.onload = function () {
            let img = new Image;
            img.src = reader.result;
            generateMeme(img, topTextInput.value, bottomTextInput.value, topTextSizeInput.value, bottomTextSizeInput.value);
        };
        reader.readAsDataURL(imageInput.files[0]);
    });
    */
}

init();
GenerarMeme();
cambiarTamanoFuente();