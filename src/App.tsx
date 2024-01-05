import { useState } from "react";
import TaskItem from "./components/TaskItem";
import {DragDropContext, Droppable, DropResult} from "react-beautiful-dnd"

import db from "./db/db";

const App = () => {
  
  const [stores, setStores] = useState(db)
  
  const handleDragDrop = ({source, destination, type}: DropResult)=>{
    
    if(!destination){
      return
    }

    if(source.index === destination.index && source.droppableId === destination.droppableId){
      return
    }

    if(type === "group"){
      const reordedStores = [...stores]

      const sourceIndex = source.index
      const destinationIndex = destination.index

      const [removedStore] = reordedStores.splice(sourceIndex, 1)

      reordedStores.splice(destinationIndex, 0, removedStore)

      return setStores(reordedStores)

    }
  }
  
  return(
    <div className="w-screen h-screen relative flex justify-center items-center bg-gray-200 p-4">
      <div className="w-[400px] h-fit p-5 rounded-xl bg-gray-200 border-2 border-gray-300 shadow-lg">
        <h1 className="text-2xl text-gray-800 font-bold uppercase">Reordenable list</h1>
        <DragDropContext onDragEnd={handleDragDrop}>
          <Droppable droppableId="ROOT" type="group">
            {(provided)=>(
              <div className="my-4 flex flex-col" {...provided.droppableProps} ref={provided.innerRef}>
                {
                  stores.map((store, index) =>(
                    <TaskItem key={store.id} id={store.id} content={store.name} index={index}/>
                  ))
                }
              {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  )
};

export default App;
