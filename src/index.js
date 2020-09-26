/* eslint-disable import/extensions */
import {
  agregarMonedas, buscarCambios,
} from './exchange.js';

import {
  establecerMaximaFecha,
  borrarListaAnterior,
  actualizarTitulo,
  mostrarListaDeCambios,
  botonSiguiente,
} from './ui.js';

import {
  verificarMoneda,
  verificarFecha,
  verificarHayaDatos,
} from './check.js';

botonSiguiente.onclick = async function actualizar() {
  await verificarHayaDatos(await verificarMoneda(), await verificarFecha());
  borrarListaAnterior();
  mostrarListaDeCambios(await buscarCambios(await verificarFecha(), await verificarMoneda()));
  actualizarTitulo(await verificarFecha(), await verificarMoneda());
};

function iniciar() {
  agregarMonedas();
  establecerMaximaFecha();
}

iniciar();
