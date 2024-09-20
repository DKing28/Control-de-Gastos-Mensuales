let listaNombresGastos = [];
let listaValoresGastos = [];
let listaDescripcionesGastos = [];

//Esta función se invoca al momento de que el usuario hace clic  en el botón

function clickBoton() {
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;
    let descripcionGasto = document.getElementById('descripcionGasto').value;

    console.log(nombreGasto);
    console.log(valorGasto);
    console.log(descripcionGasto);

    if (Number(valorGasto) > 150) {
        alert('¡Ten Cuidado! Este gasto supera los 150$');
    } else {
        listaNombresGastos.push(nombreGasto);
        listaValoresGastos.push(valorGasto);
        listaDescripcionesGastos.push(descripcionGasto);

        console.log(listaNombresGastos)
        console.log(listaValoresGastos)
        console.log(listaDescripcionesGastos);
    //alert('Click de usuario');
        actualizarListaGastos();
    }
}

function actualizarListaGastos() {
    const listaElementos = document.getElementById('listaDeGastos');
    const totalElementos = document.getElementById('totalGastos');
    let htmlLista = '';
    let totalGastos = 0;
    listaNombresGastos.forEach((elemento, posicion) => {
        const valorGasto = Number(listaValoresGastos[posicion]);
        const descripcionGasto = listaDescripcionesGastos[posicion];

        htmlLista += `<li>${elemento} - USD ${valorGasto.toFixed(2)} - ${descripcionGasto}
                    <button onclick="eliminarGasto(${posicion});">Eliminar</button>
                    <button onclick="modificarGasto(${posicion});">Modificar</button>
                    </li>`;
        //Calculamos el total de gastos
        totalGastos += Number(valorGasto)

    });

    listaElementos.innerHTML = htmlLista;
    totalElementos.innerHTML =totalGastos.toFixed(2);
    limpiar();
}

function limpiar() {
    document.getElementById('nombreGasto').value = '';
    document.getElementById('valorGasto').value = '';
    document.getElementById('descripcionGasto').value = '';
}

function eliminarGasto(posicion) {
    listaNombresGastos.splice(posicion, 1);
    listaValoresGastos.splice(posicion, 1);
    listaDescripcionesGastos.splice(posicion, 1);
    actualizarListaGastos();
}

function modificarGasto(posicion) {
    let nombreGasto = listaNombresGastos[posicion];
    let valorGasto = listaValoresGastos[posicion];
    let descripcionGasto = listaDescripcionesGastos[posicion];

    document.getElementById('nombreGasto').value = nombreGasto;
    document.getElementById('valorGasto').value = valorGasto;
    document.getElementById('descripcionGasto').value = descripcionGasto;

    document.getElementById('botonFormulario').innerHTML = 'Guardar Cambios';
    document.getElementById('botonFormulario').onclick = function() {
        guardarCambios(posicion);
    };
}

function guardarCambios(posicion) {
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;
    let descripcionGasto = document.getElementById('descripcionGasto').value;

    listaNombresGastos[posicion] = nombreGasto;
    listaValoresGastos[posicion] = valorGasto;
    listaDescripcionesGastos[posicion] = descripcionGasto;

    actualizarListaGastos();
    limpiar();
    document.getElementById('botonFormulario').innerHTML = 'Agregar Gasto';
    document.getElementById('botonFormulario').onclick = function() {
        clickBoton();
    };
}