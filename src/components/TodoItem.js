import "./TodoItem.css";

const TodoItem = ({name,status}) =>{
    return(
        <div className="box-item">
            <div className="status">

            </div>
            <p>{name}</p>
        </div>
    );
}

export default TodoItem;