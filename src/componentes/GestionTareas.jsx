import React, { useState } from "react";
import TareaFormulario from "./TareaFormulario";
import Tarea from "./Tarea";

import "../estilos/gestionTareas.css";

function GestionTareas() {
    const [tareas, setTareas] = useState([]);

    const almacenaLasTareas = tarea => {
        if (tarea.texto.trim()) {
            tarea.texto = tarea.texto.trim();
            let nuevaTarea = [tarea, ...tareas];
            setTareas(nuevaTarea);
        } else {
            alert("Tarea vacía invalida");
        }
    }
    const eliminarTarea = id => {
        let listaDeTareasActualizadas = tareas.filter(tarea => tarea.id !== id);
        setTareas(listaDeTareasActualizadas);
    }

    const modificarTarea = (id) => {
        const nuevoTexto = prompt("Ingrese el nuevo texto:");
        setTareas(tareas.map(tarea =>
            tarea.id === id ? { ...tarea, texto: nuevoTexto } : tarea
        ));
    }


    return (
        <div className="gestionTareas">
            <TareaFormulario
                almacenaLasTareas={almacenaLasTareas} />
            <pre className="listaDeTareas">
                {
                    tareas.map((tarea) =>
                        <Tarea
                            key={tarea.id}
                            id={tarea.id}
                            texto={tarea.texto}
                            eliminarTarea={eliminarTarea}
                            modificarTarea={modificarTarea} />
                    )
                }
            </pre>
        </div>
    );
}

export default GestionTareas;
