import React, { useState } from 'react'
import { GrFormAdd } from 'react-icons/gr';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import ReactSwitch from 'react-switch';

const ToDoMenu= () =>{
    const[task,settask]=useState("");
    const[list,setlist]=useState([])
    

    const addTask=() =>{
        if(task){

            const To_do={
                id:list.length+1,
                title:task,
                toggle:false
            }
            setlist([To_do,...list])
            settask('')
        }

    }
    console.log(list)
    return(
        <div className='mx-auto mt-8'>
            <div className='flex items-center justify-center mb-4'>
                <input
                type="text" 
                className='w-[350px] border-2 border-blue-900 bg-gradient-to-r from-sky-900 via sky-500
                to-indigo-200 font-bold rounded-md px-3 py-2 mr-3 
                placeholder:text-white'placeholder='Enter Task..'
                value={task}
                onChange={(e)=>settask(e.target.value)}
                />
                <button className='bg-blue-500 hover:bg-blue-800 font-bold py-4 px-4 rounded'
                onClick={addTask}>
                <GrFormAdd/>
                </button>
            </div>
            <div className='flex flex-col items-center'>
                <div className={`${list.length>0 && 'bg-gradient-to-r from-sky-500 via bg-indigo-100 to-pink-100 pt-2 pl-2 pr-2'}`}>
                    {list.length===0?<h1>ADD TASK</h1>:
                    list.map((task)=>(
                        <div>
                            <h4>{task.title}</h4>
                            <button><RiDeleteBin5Fill/></button>
                           <ReactSwitch/>
                        </div>

                    ))
                    
                    }
                </div>
            </div>
        </div>

        

    )
}
export default ToDoMenu;