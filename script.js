
const movimientoForm = document.getElementById('movimientoForm');
const listaMovimientos = document.getElementById('listaMovimientos');
const ingresosTotales = document.getElementById('ingresosTotales');
const egresosTotales = document.getElementById('egresosTotales');
const balanceTotal = document.getElementById('balanceTotal');
const agregarBtn = document.getElementById('agregar');

let movimientos = [];
let totalIngresos = 0;
let totalEgresos = 0;

function agregarMovimiento() {
  const fecha = document.getElementById('fecha').value;
  const concepto = document.getElementById('concepto').value;
  const tipo = document.getElementById('tipo').value;
  const monto = parseFloat(document.getElementById('monto').value);

  if (!fecha || !concepto || isNaN(monto)) {
    alert('Por favor, completa todos los campos correctamente.');
    return;
  }
  const movimiento = { fecha, concepto, tipo, monto };
  movimientos.push(movimiento);

  if (tipo === 'ingreso') {
    totalIngresos += monto;
  } else if (tipo === 'egreso') {
    totalEgresos += monto;
  }
  actualizarTabla();
  actualizarBalance();
  movimientoForm.reset();
}
function actualizarTabla() {
  listaMovimientos.innerHTML = ''; // Limpiar la tabla

  movimientos.forEach((movimiento) => {
    const fila = document.createElement('tr');
    fila.innerHTML = `
      <td>${movimiento.fecha}</td>
      <td>${movimiento.concepto}</td>
      <td>${movimiento.tipo}</td>
      <td>$${movimiento.monto.toFixed(2)}</td>
    `;
    listaMovimientos.appendChild(fila);
  });
}
function actualizarBalance() {
  ingresosTotales.textContent = totalIngresos.toFixed(2);
  egresosTotales.textContent = totalEgresos.toFixed(2);
  balanceTotal.textContent = (totalIngresos - totalEgresos).toFixed(2);
}
agregarBtn.addEventListener('click', agregarMovimiento);
