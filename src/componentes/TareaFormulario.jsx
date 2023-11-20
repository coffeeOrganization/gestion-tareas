import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TareaFormulario({ almacenaLasTareas }) {
    const [inputTarea, setInputTarea] = useState('');

    const gestionInputTarea = e => setInputTarea(e.target.value);

    const gestionEnvioTarea = e => {
        e.preventDefault();
        let tarea = {
            id: uuidv4(),
            texto: inputTarea
        }
        almacenaLasTareas(tarea);
    }

    return (
        <form
            onSubmit={gestionEnvioTarea}
            className="formularioDeAgregarTarea">
            <textarea
                type="text"
                className="ingresoTextoDeTarea"
                onChange={gestionInputTarea}></textarea>
            <button
                className="buttonGuardar"
                type="sumbit">Guardad</button>
        </form>
    );
}

export default TareaFormulario;