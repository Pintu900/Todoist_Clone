import React,{ useState } from 'react'
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import dateFnsFormat from "date-fns/format"
import { ModifiersUtils } from 'react-day-picker';

const FORMAT="dd/MM/yyyy";
function formatDate(date,format,locale){
    return dateFnsFormat(date,format,{locale});
}

const AddTask=(props)=>{
   const [task,setTask] =useState("");
   const [date,setDate]=useState(null);
   //console.log(task);
    return(
        <div className="add-task-dialog">
              <input value={task} onChange={(event)=>setTask(event.target.value)}/>
              <div className="add-task-actions-container">
                  <div className="btns-container">
                   <button className="add-btn" onClick={()=>{
                       props.onAddTask(task);
                       props.onCancel();
                       setTask("");
                   }}>Add Task</button>
                   <button className="cancel-btn" onClick={()=>{
                       props.onCancel();
                       setTask("");
                }}>Cancel</button>
                  </div>
                  <div className="icon-container">
                      <DayPickerInput onDayChange={(day)=>{
                          setDate(day);
                      }}
                      placeholder={`${dateFnsFormat(new Date(),FORMAT)}`}
                      formatDate={formatDate}
                      format={FORMAT}
                      dayPickerProps={{
                          modifiers:{
                           disabled:[{before: new Date()}],
                          },
                      }}/>
                  </div>
              </div>
          </div>
    )
}
const Task = () => {
    const [showAddTask,setAddTask]=useState(false);
    const [tasks,setTasks]=useState([]);
    const addNewTask=(text)=>{
        setTasks((prevState)=>[...prevState,text]);
    }
    console.log(tasks);
    return (
        <div className="tasks">
          <h1>Inbox</h1>
          <div className="add-task-btn"
          onClick={()=>setAddTask((prevState)=> !prevState)}>
              <span className="plus">+</span>
              <span className="add-task-text">Add Task</span>
          </div>
          {showAddTask && <AddTask 
          onAddTask={addNewTask}
          onCancel={()=> setAddTask(false)} 
          />}
          {tasks.length > 0 ? tasks.map((task)=><p>{task}</p>):null}
        </div>
    )
}

export default Task

