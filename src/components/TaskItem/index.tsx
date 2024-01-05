import TaskIcon from "../TaskIcon"

type TaskItemProps = {
    id?: string,
    content: string
}

const TaskItem = ({content}: TaskItemProps) => {
  return (
    <div
        className=" bg-gray-100 border-2 border-gray-200 p-4 rounded-lg flex gap-4 items-center"
    ><TaskIcon/>{content}</div>
  )
}

export default TaskItem