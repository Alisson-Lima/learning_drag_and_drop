import TaskIcon from "../TaskIcon"
import {Draggable} from "react-beautiful-dnd"

type TaskItemProps = {
    id: string,
    content: string,
    index: number
}

const TaskItem = ({id, content, index}: TaskItemProps) => {
  return (
    <Draggable draggableId={id} key={id} index={index}>
      {(provided)=>(
        <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef} className=" bg-gray-100 border-2 border-gray-200 p-4 rounded-lg flex gap-4 items-center my-1">
          <TaskIcon/>{content}
        </div>
      )}
    </Draggable>
  )
}

export default TaskItem