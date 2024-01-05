import { useState } from "react";
import TaskItem from "./components/TaskItem";

import db from "./db/db";

const App = () => {

  const [stores, setStores] = useState(db)
  
  return(
    <div className="w-screen h-screen relative flex justify-center items-center bg-gray-200">
      <div className="w-[400px] h-fit p-5 rounded-xl bg-gray-200 border-2 border-gray-300 shadow-lg">
        <h1 className="text-2xl text-gray-800 font-bold uppercase">Reordenate list</h1>
        <div className="droppable my-4 flex flex-col gap-2">
          {
            stores.map(store =>(
              <TaskItem content={store.name}/>
            ))
          }
        </div>
      </div>
    </div>
  )
};

export default App;
