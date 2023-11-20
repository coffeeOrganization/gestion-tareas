import React from "react";
import { IoTrashSharp, IoBuild } from "react-icons/io5";

function Tarea(promps) {
    return (
        <div className="tareas">
            <div className="textoTarea">{promps.texto}</div>
            <div className="icono">
                <IoTrashSharp onClick={() => promps.eliminarTarea(promps.id)} className="iconoEliminar" />
                <IoBuild onClick={() => promps.modificarTarea(promps.id)} className="iconoModificar" />
            </div>
        </div>
    );
}

export default Tarea