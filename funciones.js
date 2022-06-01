function generarSelect() {
    console.log('Hola');

    // let sltP = document.getElementsByClassName('sltP');
    // console.log('sltP:', sltP.length);


    // Variable que contiene el html del select
    const slt = `
    <select class="form-select" id="exampleSelect1">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option> 
        <option>5</option>
    </select>`;

    let cantSlt = 2;

    for (let i = 1; i <= cantSlt; i++) {
        // Asignar mediante html el select a cada pregunta
        document.getElementById('sltP' + i).innerHTML = slt;
    }
}

generarSelect();