// Elementos
const resultado = document.querySelector('#resultado');

// Eventos
document.addEventListener('DOMContentLoaded', mostrarAutos);

// Funciones

function mostrarAutos() {
    autos.forEach(auto => {
        const autoHTML = document.createElement('P');
        const {marca, modelo, year, precio, puertas, color, transmision} = auto;
        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: ${precio} - Color: ${color}
        `
        resultado.appendChild(autoHTML);
    })
}