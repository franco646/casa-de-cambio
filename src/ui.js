export function establecerMaximaFecha() {
  document.querySelector('#fecha').setAttribute('max', new Date().toISOString().split('T')[0]);
}

export function borrarListaAnterior() {
  document.querySelectorAll('li').forEach((moneda) => {
    moneda.remove();
  });
}

export function actualizarTitulo(fechaIngresada, monedaIngresada) {
  const titulo = document.querySelector('#titulo');
  titulo.textContent = `Valor monetario de el dia ${fechaIngresada}, en base: ${monedaIngresada}`;
}

export function error() {
  borrarListaAnterior();
  document.querySelector('#titulo').textContent = 'Verifique que haya ingresado datos o pruebe con otra fecha';
}

export function mostrarCartelCargando() {
  document.querySelector('#titulo').textContent = 'Cargando....';
}

export function continuar() {
  borrarListaAnterior();
  actualizarTitulo();
}

export function mostrarListaDeCambios(respuestaJSON) {
  Object.keys(respuestaJSON.rates).forEach((moneda) => {
    const $lista = document.querySelector('#lista');
    const $monedaEnLista = document.createElement('li');
    $monedaEnLista.className = 'list-group-item';
    $monedaEnLista.textContent = `${moneda}:  ${respuestaJSON.rates[moneda]}`;

    $lista.appendChild($monedaEnLista);
  });
}

export const botonSiguiente = document.querySelector('#boton-siguiente');
