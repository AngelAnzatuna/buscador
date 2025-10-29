// Elementos select
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

// Elementos
const resultado = document.querySelector('#resultado');
const max = new Date().getFullYear();
const min = max - 10;

// Objeto contenedor
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
};

// Eventos
document.addEventListener('DOMContentLoaded', () => {
    // Mostrar lita de autos en la web
    mostrarAutos();
    // Mostrar los años en el select
    mostrarYears();
});

marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;
})
year.addEventListener('change', e => {
    datosBusqueda.year = e.target.value;
})
minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value;
})
maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value;
})
puertas.addEventListener('change', e => {
    datosBusqueda.puertas = e.target.value;
})
transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;
})
color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;
    console.log(datosBusqueda);
})

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

function mostrarYears() {
    for(let i = max; i >= min; i--) {
        const mostrarYear = document.createElement('option');
        mostrarYear.value = i;
        mostrarYear.textContent = i;

        year.append(mostrarYear);
    }    
}