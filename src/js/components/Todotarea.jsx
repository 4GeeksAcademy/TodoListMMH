import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"
import { useState } from "react";

const Todotarea = () => {

    const [tarea, setTarea] = useState(["Manzana", "Pera", "Mango"])
    const [task, setTask] = useState("");


    function addTask(event) {
        console.log(event.key);
        if (event.key == "Enter") {
            setTarea([...tarea, task,])
            
        }
    }

    function eliminar(id) {

        let aux = tarea.filter((task, index) => {
            if (index != id) {

                return task
            }

        })
        setTarea(aux)
    }

    return (




        <div className="text-center mt-5" style={{ maxwidth: '500px' }} >
            <div className="card shadow p-4">




                <input type="text" className="form-control mt-3" placeholder="Enter a task"
                    value={task}
                    onChange={(event) => setTask(event.target.value)}
                    onKeyDown={(event) => addTask(event)}
                    
                    

                />


            </div>

            <div className="list-group mt-3">
                {tarea.map((task, id) => (
                    <a href="#" key={id} className="list-group-item list-group-item-action" aria-current="true">
                        {task}

                        <button className="btn btn-danger float-end" onClick={() => eliminar(id)}>Borrar</button>
                    </a>

                ))}




            </div>

        </div>

    )
};

















export default Todotarea;