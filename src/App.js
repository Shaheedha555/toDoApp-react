import React,{useState,useEffect} from 'react'

import './App.css';
function App() {
  const [toDos,setToDos] = useState([])
  const [toDo,setToDo] = useState("")
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {Date(Date.now).slice(0,10)} 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input required value={toDo} onChange={(e)=>{
          setToDo(e.target.value)
        }} type="text" placeholder="🖊️ Add item..."  />
        
        <i onClick={()=>{
          if(toDo!="")
          setToDos([...toDos,{id:Date.now(),text:toDo,status:false,remove:false}])
          setToDo("")

        }} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {
          toDos.map((obj)=>{
            if(!obj.remove)
            if(!obj.status)
            return(

        <div className="todo">
          <div className="left">
            <input type="checkbox" checked={obj.status} onChange={(e)=>{
              setToDos(toDos.filter((obj2)=>{
                if(obj2.id === obj.id){
                  obj2.status = e.target.checked
                }
                return obj2
              }))
            }} name="" id="" />
            
            <p>{obj.text}</p>
            
          </div>
          <div className="right">
            <i onClick={(e)=>{
              setToDos(toDos.filter((obj2)=>{
                if(obj2.id === obj.id){
                  obj2.remove = true;

                }
                return obj2
              }))
            }} className="fas fa-times"></i>
          </div>
        </div>)
        if(obj.status)
        return  (
        <div className="todo success">
          <div className="left">
            <input type="checkbox" checked={obj.status} onChange={(e)=>{
              setToDos(toDos.filter((obj2)=>{
                if(obj2.id === obj.id){
                  obj2.status = e.target.checked
                }
                return obj2
              }))
            }} name="" id="" />
            
            <p className='success'>{obj.text}</p>
            
          </div>
          <div className="right">
            <i onClick={(e)=>{
              setToDos(toDos.filter((obj2)=>{
                if(obj2.id === obj.id){
                  obj2.remove = true;

                }
                return obj2
              }))
            }} className="fas fa-times"></i>
          </div>
        </div>)
          })
        }
       
      </div>
    </div>
  );
}

export default App;
