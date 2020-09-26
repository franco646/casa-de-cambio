/* eslint-disable import/extensions */
import { mostrarError } from './ui.js';

export function agregarMonedas() {
  fetch('https://api.exchangeratesapi.io/latest')
    .then((respuesta) => respuesta.json())
    .then((respuestaJSON) => {
      Object.keys(respuestaJSON.rates).concat('EUR').forEach((moneda) => {
        const $moneda = document.createElement('option');
        $moneda.textContent = moneda;
        document.querySelector('#moneda').appendChild($moneda);
      });
    });
}

export async function buscarCambios(fechaIngresada, monedaIngresada) {
  return fetch(`https://api.exchangeratesapi.io/${fechaIngresada}?base=${monedaIngresada}`)
    .then((respuesta) => respuesta.json())
    .then((respuestaJSON) => respuestaJSON)
    .catch(() => mostrarError());
}
