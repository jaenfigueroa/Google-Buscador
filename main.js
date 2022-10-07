const buscar = document.querySelector('#buscar')
const busqueda = document.querySelector('#busqueda')

function buscarBusqueda() {
  let url = `https://www.google.com/search?q=${busqueda.value}`
  window.location.assign(url)
}

/* BUSCAR AL HACER CLICK EN EL BOTON BUSCAR */
buscar.addEventListener('click', buscarBusqueda)

/* ESCUCHADOR DE LA TECLA ENTER */
busqueda.addEventListener('keydown', function (event) {
  if (event.code == 'Enter') {
    buscarBusqueda()
  }
})
