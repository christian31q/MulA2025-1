window.onload = function() {
    let colores = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'];
   // console.log(colores[0]);
    let i = 1;
    let circulo = document.getElementsByClassName('circulo');
    console.log(circulo);
    for (let j = 0; j < circulo.length; j++) {
        let cuadro = document.createElement('div');
        cuadro.style.width = '10px';
        cuadro.style.height = '10px';
        cuadro.style.backgroundColor = 'grey';
        cuadro.style.display = 'inline-block';
        cuadro.style.margin = '10px';
        document.body.appendChild(cuadro);


        circulo[j].i = 1;
        circulo[j].addEventListener('click', function() {

            cambiarColor(this,colores[circulo[j].i++]) // Cambiar el color del circulo;
        });
    }
    //cambiarColor(circulo,colores[0]) // Cambiar el color del circulo
    /*circulo.addEventListener('click', function() {
        
        cambiarColor(circulo,colores[i++]) // Cambiar el color del circulo
        //cambiarImagen(goku); // Cambiar la imagen del circ
    });*/
}

function cambiarColor(element,color) {
    element.style.backgroundColor = color;
}

function cambiarImagen(element) {
    element.src = 'img/goku02.jpg';
}


