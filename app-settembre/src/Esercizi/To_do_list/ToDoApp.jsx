import React, { useEffect, useState } from 'react'
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';
import ToDoItem from './ToDoItem';


const API_URL="http://localhost:4000/tasks"

const ToDoApp = () => {

    const [tasks,setTasks] = useState([]);

    const[loading,setLoading]=useState(true);
    const[error,setError]=useState(null);

    const fetchTask=async()=>{
        try{
            const response=await fetch(API_URL);
            const data=await response.json();
            if(!response.ok) throw new Error("Errore nella fetch");
            setTasks(data);
        }catch(err){
            setError(err);
        }finally{
            setLoading(false);
        }
    }; 
    const deleteTask= async()=>{
        await fetchTask(API_URL+"/"+id,{method:"DELETE"});
        fetchTask(API_URL)
    }
    useEffect(()=>{
            fetchTask()
        }, []);

    return (
    <div className='container m-4'>
        <h1 className='mb-4'>To Do List</h1>
        <ToDoForm></ToDoForm>
        <ToDoList tasks={tasks}></ToDoList>
        </div>
    );
};

export default ToDoApp;