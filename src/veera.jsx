import React, { useState } from 'react'

function Veera() {
    const [newtask,setnewtask] = useState('');
    const [todolist,settodolist] = useState([]);
    const addtask = ()=>{
        const newitem ={
            id:todolist.length === 0 ? 1 : todolist[todolist.length-1].id+1,
            itemname:newtask
        }
        settodolist([...todolist,newitem]);
    }

    const deletetask=(myid)=>{
        const filterdata = todolist.filter((item)=>{
            return myid!==item.id;
        })
        settodolist(filterdata);
    }
    
  return (
    <div className='container'>
        <div className='content'>
            <input type="text" onChange={e=>setnewtask(e.target.value)} />
            <button onClick={addtask}>add task</button>
        </div>
        <h1>Remaining task: {todolist.length}</h1>
        <ul>
            {todolist.map((item)=>{
                return(
                    <li key={item.id}>
                        <span>{item.id}</span>
                        <span>{item.itemname}</span>
                        <button onClick={()=>deletetask(item.id)}>complete</button>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default Veera