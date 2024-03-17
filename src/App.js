import React,{useState} from 'react'
import './App.css'

function App(){
  const [todolist,settodolist] = useState([])
  const [newtask,setnewtask] = useState('')

  const getvalue=(e)=>{
    setnewtask(e.target.value)
  }

  const addtasklist=()=>{
    const newitem={
      id:todolist.length === 0 ? 1 : todolist[todolist.length-1].id+1,
      itemname:newtask
    }
    settodolist([...todolist,newitem])
  }

  const deleteData=(myid)=>{
      const filterdata = todolist.filter((task)=>{
        return myid!==task.id;
      })
      settodolist(filterdata)
  }

  return(
    <div className='container'>
      <div className='content'>
      <input type="text" className='input' onChange={getvalue} />
      <button onClick={addtasklist} className='buttonadd'>Add task</button>

      <h3> Remaining Tasks : {todolist.length}</h3>
      <ul>
        {
          todolist.map((task)=>{
            return(
              <li key={task.id} className='flexlist'>
                <span className='number'>{task.id}.</span>
                <span className='tasks'>{task.itemname}</span>
                <button onClick={()=>deleteData(task.id)}>Complete</button>
              </li>
            )
          })
        }
      </ul>
      </div>
    </div>
  )
}

export default App
