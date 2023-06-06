import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Listitem from './assets/components/ListItem'
import ModalEdit from './assets/components/ModalEdit'

function App() {
  const [tasks,setTasks] = useState([ 
    {id:1,task:"เขียนโปรแกรม"},
    {id:2,task:"อ่านหนังสือ"}
  ])
  const [inputTask,SetInputTask] = useState('');
  const [editId,setEditId] = useState(null)

  function saveTasks(){
    if(!inputTask){
      alert('กรุณาป้อนข้อมูล')
    }else{
      const newTask ={
        id:Math.floor(Math.random()*1000),
        task:inputTask
      }
      setTasks([...tasks,newTask])
      SetInputTask('');
    }
  }
  function removeTask(id){
    setTasks(tasks.filter((data)=>{
      return data.id !==id
    }))
  }
  function updateTask(){
    if(editId){
     const update_TasK = tasks.map((item)=>{
        if(item.id===editId){
          return {...item,task:inputTask}
        }
        return item;
      })
      setTasks(update_TasK);
      SetInputTask('');
      closeModal();
    }
  }

  function editTask(id){
    setEditId(id)
    const editTask = tasks.find((item)=>item.id === id)
    console.log(editTask);
    SetInputTask(editTask.task)
  }

  function closeModal(){
    setEditId(null);
  }

  let openModal = null;
  if(!!editId){
      openModal = <ModalEdit editTask={editTask} 
      editId={editId} closeModal={closeModal} 
      inputTask={inputTask} SetInputTask={SetInputTask}
      updateTask ={updateTask}
      
      />
  }
  return (
    <div className='App'>
        <h2 className='title'>TO DO LIST APPLICATION</h2>
        <div className='Task-input'>
        <input type="text" placeholder='Please Enter your task' value={inputTask} onChange={(e)=>SetInputTask(e.target.value)}/>
        <button className='btn-add' onClick={saveTasks}>ADD</button>
        </div>
       <div>
          {tasks.map((data)=>{
            return <Listitem data={data} key={data.id} removeTask={removeTask} tasks={tasks} editTask={editTask} editId={editId} closeModal={closeModal}/>
          })}
       </div>
       {openModal}
    </div>
  )
}

export default App
