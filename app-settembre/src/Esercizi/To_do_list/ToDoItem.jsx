import React from 'react'

const ToDoItem = ({task}) => {
  return (
    <li className='list-group-item d-flex'>
        <span>{task.text}</span>
        <button className='btn btn-sn btn-danger' onClick={()=>{handleDeleteTask(task.id)}}>Elimina</button>
        </li>
  )
};

export default ToDoItem;