import TodoItem from "./TodoItem";

const TodoList = ({todolist}) => {
    return(
        <div>
           {todolist.map((todoItem) => (
                <TodoItem key={todoItem.id} name={todoItem.name} status={todoItem.status}></TodoItem>
           ))}
        </div>
    );
}

export default TodoList;