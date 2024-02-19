window.onload = function () {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'navegacion.html', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('nav').innerHTML = xhr.responseText;
        }
    };
    xhr.send();
};

// Declaración de Variables
let inputDepto = document.getElementById('input-depto')
let inputCiudad = document.getElementById('input-ciudad')
let inputRegion = document.getElementById('input-region')
let inputUbicacion = document.getElementById('input-ubicacion')
let inputMes = document.getElementById('input-mes')
let inputContacto = document.getElementById('input-contacto')
let inputReclutador = document.getElementById('input-reclutador')

let displayDepto = document.getElementById('depto')
let displayCiudad = document.getElementById('ciudad')
let displayRegion = document.getElementById('region')
let displayUbicacion = document.getElementById('ubicacion')
let displayMes = document.getElementById('mes')
let displayDeptoFooter = document.getElementById('depto-footer')
let displayContacto = document.getElementById('contacto')
let displayReclutador = document.getElementById('reclutador')

// Actualización de Datos Generales
inputDepto.addEventListener('input', function () {
    displayDepto.innerHTML = inputDepto.value
    displayDeptoFooter.innerHTML = inputDepto.value
})
inputCiudad.addEventListener('input', function () {
    displayCiudad.innerHTML = inputCiudad.value
})
inputRegion.addEventListener('input', function () {
    displayRegion.innerHTML = inputRegion.value
})
inputUbicacion.addEventListener('input', function () {
    displayUbicacion.innerHTML = inputUbicacion.value
})
inputMes.addEventListener('input', function () {
    displayMes.innerHTML = inputMes.value
})
inputContacto.addEventListener('input', function () {
    displayContacto.innerHTML = inputContacto.value
})
inputReclutador.addEventListener('input', function () {
    displayReclutador.innerHTML = inputReclutador.value
})

// Botón Copiar String para DOM Capture
let btnCopiarString = document.getElementById('copiar-string')
btnCopiarString.addEventListener('click', copiarString)

const stringElemScr = ".area-boletin"
function copiarString() {
    navigator.clipboard.writeText(stringElemScr);
    alert('Pega el texto copiado en la extensión "DOM Capture" y da click en "Save as image" 👉');
}
// Botón Copiar Ícono de WhatsApp
let btnCopiarIconoWA = document.getElementById('copiar-whatsapp')
btnCopiarIconoWA.addEventListener('click', copiarIconoWA)

function copiarIconoWA() {
    navigator.clipboard.writeText('<i class= "fa fa-whatsapp" style = "font-size:36px" ></i > ')
    alert('Pega el código del ícono, seguido escribe el teléfono.')
}

// Botones Aumentar y Disminuir Tamaño de Tipografía
let btnFontUp = document.getElementById('btn-aum-font')
let btnFontDown = document.getElementById('btn-dim-font')

btnFontUp.addEventListener('click', aumentarFont)
btnFontDown.addEventListener('click', disminuirFont)

var tamanoFont = 24
lista.style.fontSize = tamanoFont + "pt";
var lineaFont = 40
lista.style.lineHeight = lineaFont + "pt";

function aumentarFont() {
    tamanoFont++
    lineaFont = lineaFont + 3
    lista.style.fontSize = tamanoFont + "pt";
    lista.style.lineHeight = lineaFont + "pt";
}
function disminuirFont() {
    tamanoFont--
    lineaFont = lineaFont - 3
    lista.style.fontSize = tamanoFont + "pt";
    lista.style.lineHeight = lineaFont + "pt";
}

function convertirTexto() {
    var input = document.getElementById('input-lista');
    var lista = document.getElementById('lista');

    // Limpiamos la lista antes de añadir nuevos elementos
    lista.innerHTML = '';

    // Obtenemos el texto ingresado por el usuario
    var texto = input.value;

    // Reemplazamos cada instancia de "\tAvanzado" con un asterisco (*)
    texto = texto.replace(/\tAvanzado/g, '*');
    // Reemplazamos cada instancia de "\tIntermedio", "\tBásico" y "\tNo Requerido" con un espacio vacío
    texto = texto.replace(/\tIntermedio/g, '').replace(/\tBásico/g, '').replace(/\tNo\sRequerido/g, '');

    // Dividimos el texto en líneas
    var lineas = texto.split('\n');

    // Creamos un elemento <li> por cada línea y lo agregamos a la lista
    lineas.forEach(function (linea) {
        if (linea.trim() !== '') {
            var li = document.createElement('li');

            if (linea.trim().startsWith('-')) {
                li.textContent = linea.trim().substring(1); // Removemos el guión al principio
                li.classList.add('boletin-area'); // Agregamos la clase CSS .boletin-area
            } else {
                li.textContent = linea.trim();
            }

            lista.appendChild(li);
        }
    });
}

// import * as htmlToImage from 'html-to-image';
// import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';

// function screenshot() {
//     htmlToImage.toJpeg(document.getElementById('screenshot'), { quality: 0.95 })
//         .then(function (dataUrl) {
//             var link = document.createElement('a');
//             link.download = 'my-image-name.jpeg';
//             link.href = dataUrl;
//             link.click();
//         });
// }

// document.getElementById('take-ss').addEventListener('click', screenshot)