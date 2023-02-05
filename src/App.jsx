import { FormTodo } from './components/FormTodo';
import { TaskList } from './components/TaskList';
import "./App.css"
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const todos = [
  {id:uuidv4(),description:'queso'},
  {id:uuidv4(),description:'queso1'},
  {id:uuidv4(),description:'queso2'}
]

function App() {

  const [items,setItems] = useState(todos);

  const [description, setDescription] = useState("");

  const handleDescription = (e) =>{
    setDescription(e.target.value);
  }

  const handleSumit = (e) =>{
    e.preventDefault();
    if(description != ""){
      const temItems = [...items,{id:uuidv4(),description}]; 
      setItems(temItems);
      setDescription("")
    }else{
      alert("Ingrese una descripción");
    }
  }

  const handleDelete = (id) => {
    const tempItem = items.filter((item) => item.id !== id);
    setItems(tempItem)
  }

  const handleClear = () =>{
    setItems([])
  }


  return (
    <>
     <FormTodo 
      handleSumit={handleSumit}
      handleDescription={handleDescription} 
      description={description}
    />
     <TaskList 
      items={items}
      description={description} 
      handleDelete={handleDelete}
      
      
     />

     <button onClick={handleClear}>borrar todo</button>
    </>
  )
}

export default App
