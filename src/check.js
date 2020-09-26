// eslint-disable-next-line import/extensions
import { mostrarError, mostrarCartelCargando } from './ui.js';

export async function verificarMoneda() {
  const monedaIngresada = document.querySelector('#moneda').value;

  return monedaIngresada;
}

export async function verificarFecha() {
  const fechaIngresada = document.querySelector('#fecha').value;

  return fechaIngresada;
}

export function verificarHayaDatos(monedaIngresada, fechaIngresada) {
  if (monedaIngresada !== '' && fechaIngresada !== undefined) {
    mostrarCartelCargando();
  } else {
    mostrarError();
  }
}
