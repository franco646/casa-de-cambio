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
  const monedaIngresada = await verificarMoneda();
  const fechaIngresada = await verificarFecha();
  await verificarHayaDatos(monedaIngresada, fechaIngresada);
  borrarListaAnterior();
  mostrarListaDeCambios(await buscarCambios(fechaIngresada, monedaIngresada));
  actualizarTitulo(fechaIngresada, monedaIngresada);
};

function iniciar() {
  agregarMonedas();
  establecerMaximaFecha();
}

iniciar();
