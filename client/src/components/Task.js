import React from 'react';
const Task = (props) => {


    return(
        <>
            <li className="list-group-item shadow my-2 p-2" >
                {props.value}
                <button onClick={props.sendData} id={props.id} className="btn btn-danger mx-2">X</button>
            </li>
        </>
    )
}

export default Task;