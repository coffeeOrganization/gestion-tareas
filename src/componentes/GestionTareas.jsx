import React, { useState, useEffect } from "react";
import TareaFormulario from "./TareaFormulario";
import Tarea from "./Tarea";
import "../estilos/gestionTareas.css";

function GestionTareas() {
    const [tareas, setTareas] = useState([]);

    // Cargar tareas desde el localStorage cuando el componente se monta
    useEffect(() => {
        const storedTareas = JSON.parse(localStorage.getItem("tareas")) || [];
        setTareas(storedTareas);
    }, []);

    const almacenaLasTareas = (tarea) => {
        if (tarea.texto.trim()) {
            tarea.texto = tarea.texto.trim();

            const storedTareas = JSON.parse(localStorage.getItem("tareas")) || [];
            const nuevaTarea = [tarea, ...storedTareas];


            localStorage.setItem("tareas", JSON.stringify(nuevaTarea));
            setTareas(nuevaTarea);

        } else {
            alert("Tarea vacía invalida");
        }
    };

    const eliminarTarea = (id) => {
        const listaDeTareasActualizadas = tareas.filter((tarea) => tarea.id !== id);
        setTareas(listaDeTareasActualizadas);

        // Actualizar el localStorage después de eliminar una tarea
        localStorage.setItem("tareas", JSON.stringify(listaDeTareasActualizadas));
    };

    const modificarTarea = (id) => {
        const nuevoTexto = prompt("Ingrese el nuevo texto:");
        setTareas((tareas) =>
            tareas.map((tarea) => (tarea.id === id ? { ...tarea, texto: nuevoTexto } : tarea))
        );

        // Actualizar el localStorage después de modificar una tarea
        localStorage.setItem("tareas", JSON.stringify(tareas));
    };

    return (
        <div className="gestionTareas">
            <TareaFormulario almacenaLasTareas={almacenaLasTareas} />
            <pre className="listaDeTareas">
                {tareas.map((tarea) => (
                    <Tarea
                        key={tarea.id}
                        id={tarea.id}
                        texto={tarea.texto}
                        eliminarTarea={eliminarTarea}
                        modificarTarea={modificarTarea}
                    />
                ))}
            </pre>
        </div>
    );
}

export default GestionTareas;
