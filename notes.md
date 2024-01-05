# react-beautiful-dnd

- Todo id do banco de dados deve ser uma string

- O DragDropContext assiste a qualquer evento de dnd dentro de si mesmo

- O elemento Droppable e Draggable deve acoplar uma função com um parâmetro provided e retornar um elemento


### 1 - Droppable
```
    <Droppable droppableId="" type="">
      {(provided)=>(
        {
            db.map((task, index) =>(
                <TaskItem 
                    key={task.id}
                    id={task.id}
                    content={task.name}
                    index={index}
                />
            ))
        }
      )}
    </Droppable>

``` 

### 2 - Draggable (TaskItem component)
```
    <Draggable 
        draggableId={props.id}
        key={props.id}
        index={props.index}
    >
      {(provided)=>(
        <div 
            {...provided.dragHandleProps}
            {...provided.draggableProps}
            ref={provided.innerRef}
        >
          Minha tarefa
        </div>
      )}
    </Draggable>

``` 
